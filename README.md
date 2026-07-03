# 💳 Credit Card Approval Prediction using Machine Learning

A Flask-based Machine Learning web application that predicts whether a credit card application will be **Approved** or **Rejected** based on an applicant's financial and personal information.

---

# 📌 Project Overview

Financial institutions receive thousands of credit card applications every day. Manually reviewing each application is time-consuming and may lead to inconsistencies.

This project automates the credit approval process using Machine Learning by analyzing applicant information such as age, income, debt, employment history, credit score, and other financial attributes.

The application predicts whether a customer is likely to receive credit card approval, helping reduce manual effort and improve decision-making.

---

# 🎯 Objectives

- Predict credit card approval accurately.
- Compare multiple Machine Learning algorithms.
- Build a web application using Flask.
- Deploy the trained model for real-time prediction.
- Provide an easy-to-use interface for users.

---

# 🛠 Technologies Used

- Python
- Flask
- Pandas
- NumPy
- Scikit-learn
- XGBoost
- Matplotlib
- Seaborn
- HTML
- CSS
- Joblib
- Jupyter Notebook

---

# 📂 Project Structure

```
Credit Card Approval Prediction
│
├── data/
│   └── clean_dataset.csv
│
├── models/
│   ├── model.joblib
│   └── scaler.joblib
│
├── static/
│   ├── css/
│   └── images/
│
├── templates/
│   ├── index.html
│   └── result.html
│
├── app.py
├── model_training.ipynb
├── requirements.txt
└── README.md
```

---

# 📊 Dataset

The dataset contains applicant information including:

- Gender
- Age
- Debt
- Married
- Bank Customer
- Years Employed
- Prior Default
- Employment Status
- Credit Score
- Driver's License
- Income
- Industry
- Ethnicity
- Citizenship
- Approval Status (Target)

---

# ⚙️ Data Preprocessing

The following preprocessing steps were performed:

- Data Cleaning
- Missing Value Check
- Duplicate Check
- Log Transformation on Income
- Debt-to-Income Ratio Feature Engineering
- One-Hot Encoding
- Feature Scaling
- Train-Test Split

---

# 🤖 Machine Learning Models

The following algorithms were trained and evaluated:

- Logistic Regression
- Decision Tree Classifier
- Random Forest Classifier
- XGBoost Classifier

The best-performing model is used for prediction in the Flask application.

---

# 📈 Evaluation Metrics

Model performance was evaluated using:

- Accuracy
- Precision
- Recall
- F1 Score
- Confusion Matrix
- ROC-AUC Score

---

# 🌐 Web Application

The Flask application allows users to:

- Enter applicant details
- Submit the application
- Receive an instant prediction
- View whether the application is Approved or Rejected

---

# 🚀 Installation

## Clone the Repository

```bash
git clone https://github.com/yourusername/Credit-Card-Approval-Prediction.git
```

## Navigate to Project

```bash
cd Credit-Card-Approval-Prediction
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

## Run the Flask Application

```bash
python app.py
```

The application will run at:

```
http://127.0.0.1:5000
```

---

# 📷 Application Workflow

```
User Input
      │
      ▼
Flask Web Application
      │
      ▼
Data Preprocessing
      │
      ▼
Machine Learning Model
      │
      ▼
Prediction
      │
      ▼
Approved / Rejected
```

---

# 📦 Requirements

```
Python 3.10+

Flask
pandas
numpy
matplotlib
seaborn
scikit-learn
xgboost
joblib
jupyter
```

Install using:

```bash
pip install -r requirements.txt
```

---

# 📸 Screenshots

Add screenshots here after deployment.

Example:

- Home Page
- Input Form
- Prediction Result
- Confusion Matrix
- Model Accuracy Comparison

---

# 🔮 Future Enhancements

- Hyperparameter Optimization
- Cross Validation
- SHAP Explainability
- Cloud Deployment
- REST API Integration
- User Authentication
- Dashboard for Prediction Analytics

---

# 👨‍💻 Author

**Manoj Mulammagari**

B.Tech – Artificial Intelligence

---

# 📄 License

This project is developed for educational and academic purposes.

---

# 🙏 Acknowledgements

- Scikit-learn
- XGBoost
- Flask
- Python Community
- Open Source Contributors

---

⭐ If you found this project useful, consider giving it a star on GitHub.
