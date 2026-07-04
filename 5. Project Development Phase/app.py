from flask import Flask, request, jsonify, render_template
import joblib
import numpy as np
import pandas as pd

app = Flask(__name__)

# ── Load saved files ──
model        = joblib.load('models/card_model.joblib')
encoders     = joblib.load('models/encoders.joblib')
feature_cols = joblib.load('models/feature_cols.joblib')

def safe_encode(col_name, value):
    """
    Encode value using saved LabelEncoder.
    Handles string values like 'ByBirth'
    and numeric strings like '0' or '1'.
    """
    le      = encoders[col_name]
    classes = list(le.classes_)
    value   = str(value).strip()

    if value in classes:
        # Direct match - use encoder
        return int(le.transform([value])[0])
    else:
        # Try numeric fallback
        try:
            numeric_val = int(float(value))
            if 0 <= numeric_val < len(classes):
                print(f"  ⚠️ Numeric fallback: '{value}' → {numeric_val} for {col_name}")
                return numeric_val
        except Exception:
            pass
        print(f"  ⚠️ Unknown value '{value}' for {col_name}. Classes: {classes}. Using 0.")
        return 0


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()


        # ── Encode all inputs ──
        gender_enc   = safe_encode('Gender',   data['gender'])
        industry_enc = safe_encode('Industry', data['industry'])
        citizen_enc  = safe_encode('Citizen',  data['citizen'])

       

        # ── Build input in exact feature order ──
        input_data = {
            'Gender':        gender_enc,
            'Age':           float(data['age']),
            'Debt':          float(data['debt']),
            'Married':       int(data['married']),
            'BankCustomer':  int(data['bank_customer']),
            'Industry':      industry_enc,
            'YearsEmployed': float(data['years_employed']),
            'PriorDefault':  int(data['prior_default']),
            'Employed':      int(data['employed']),
            'CreditScore':   float(data['credit_score']),
            'Citizen':       citizen_enc,
            'Income':        float(data['income'])
        }


        # ── Create DataFrame in correct column order ──
        input_df    = pd.DataFrame([input_data])[feature_cols]
    

        # ── Predict ──
        prediction  = model.predict(input_df)[0]
        probability = model.predict_proba(input_df)[0]
        confidence  = round(float(max(probability)) * 100, 1)

        approved = bool(prediction == 1)

        return jsonify({
            'approved':   approved,
            'confidence': confidence
        })

    except Exception as e:
        import traceback
        print("❌ ERROR:", str(e))
        traceback.print_exc()
        return jsonify({'error': str(e)}), 400


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)