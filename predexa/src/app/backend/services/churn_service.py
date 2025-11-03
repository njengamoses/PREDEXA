import joblib
import pandas as pd

# Load your churn prediction model
model = joblib.load("app/models/churn_model.pkl")

def predict_churn(data: dict):
    df = pd.DataFrame([data])
    prediction = model.predict(df)[0]
    return "Churn" if prediction == 1 else "No Churn"
