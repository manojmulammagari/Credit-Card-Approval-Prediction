# 💳 Credit Card Approval Prediction

<div align="center">

![Python](https://img.shields.io/badge/Python-3.11-blue?style=for-the-badge&logo=python)
![Flask](https://img.shields.io/badge/Flask-Web%20Framework-black?style=for-the-badge&logo=flask)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-Machine%20Learning-orange?style=for-the-badge&logo=scikitlearn)
![XGBoost](https://img.shields.io/badge/XGBoost-Classifier-green?style=for-the-badge)
![Render](https://img.shields.io/badge/Hosted%20on-Render-46E3B7?style=for-the-badge&logo=render)

### A Machine Learning Web Application for Predicting Credit Card Approval Decisions

**🌐 Live Demo:** https://credit-card-approval-prediction-2-mfxo.onrender.com

> **Note:** The application is hosted on Render's free tier. The first request may take **30–60 seconds** while the server wakes up.

</div>

---

# 📌 Project Overview

Financial institutions receive thousands of credit card applications every day. Evaluating every application manually is time-consuming and can lead to inconsistent decisions.

This project uses **Machine Learning classification algorithms** to predict whether a credit card application is likely to be **Approved** or **Rejected** based on applicant information.

The application provides real-time predictions through a simple and interactive web interface built with **Flask**.

---

# ✨ Features

- ✅ Real-time credit card approval prediction
- ✅ Machine Learning powered decision system
- ✅ Clean and responsive web interface
- ✅ Input validation
- ✅ Confidence score for predictions
- ✅ Fast model inference using Joblib
- ✅ Online deployment using Render

---

# 🧠 Machine Learning Pipeline

```
Data Collection
        │
        ▼
Data Cleaning
        │
        ▼
Exploratory Data Analysis
        │
        ▼
Feature Engineering
        │
        ▼
Data Preprocessing
        │
        ▼
Model Training
        │
        ▼
Model Evaluation
        │
        ▼
Best Model Selection
        │
        ▼
Flask Deployment
```

---

# 📊 Algorithms Evaluated

The following classification models were trained and evaluated:

- Logistic Regression
- Decision Tree Classifier
- Random Forest Classifier
- XGBoost Classifier

The best-performing model was selected and deployed.

---

# 🛠️ Tech Stack

## Programming Language

- Python

## Machine Learning

- Scikit-learn
- XGBoost
- Joblib

## Data Analysis

- Pandas
- NumPy
- Matplotlib
- Seaborn

## Backend

- Flask

## Frontend

- HTML
- CSS
- JavaScript

## Deployment

- Render

---

# 📁 Project Structure

```
Credit-Card-Approval-Prediction
│
├── app.py
├── requirements.txt
├── README.md
├── model_training.ipynb
│
├── data
│   └── clean_dataset.csv
│
├── models
│   ├── card_model.joblib
│   ├── encoders.joblib
│   └── feature_cols.joblib
│
├── static
│   ├── css
│   └── js
│
└── templates
    └── index.html
```

---

# 🚀 Live Demo

Visit the deployed application:

### https://credit-card-approval-prediction-2-mfxo.onrender.com

---

# ⚙️ Installation

## Clone the repository

```bash
git clone https://github.com/manojmulammagari/Credit-Card-Approval-Prediction.git
```

## Move into the project

```bash
cd Credit-Card-Approval-Prediction
```

## Install dependencies

```bash
pip install -r requirements.txt
```

## Run the Flask application

```bash
python app.py
```

Open your browser and visit:

```
http://127.0.0.1:5000
```

---

# 📈 Model Evaluation

The models were evaluated using:

- Accuracy
- Precision
- Recall
- F1 Score
- Confusion Matrix

The best-performing model was selected for deployment to provide reliable real-time predictions.

---

# 🎯 Prediction Inputs

The application uses the following applicant information:

- Gender
- Age
- Debt
- Marital Status
- Bank Customer Status
- Industry
- Years Employed
- Previous Default History
- Employment Status
- Credit Score
- Citizenship
- Annual Income

---

# 📸 Application Screenshots

> Add screenshots here after deployment.

Suggested screenshots:

- Home Page
- Filled Input Form
- Approval Prediction
- Rejection Prediction

---

# 🔮 Future Enhancements

- User Authentication
- Explainable AI (SHAP/LIME)
- REST API
- Docker Support
- Cloud Database Integration
- Automated Model Retraining
- CI/CD Pipeline
- Performance Monitoring

---

# 👨‍💻 Author

**Manoj Mulammagari**

- GitHub: https://github.com/manojmulammagari

---

# ⭐ Support

If you found this project useful, please consider giving it a **⭐ Star** on GitHub.
