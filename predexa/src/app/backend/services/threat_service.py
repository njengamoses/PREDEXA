import joblib
import pandas as pd

# load your threat detection model
try:
    model = joblib.load("app/models/threat_model.pkl")
except:
    model = None

def detect_threat(data: dict):
    if not model:
        return "Model not available"
    df = pd.DataFrame([data])
    prediction = model.predict(df)[0]
    return "Threat Detected" if prediction == 1 else "No Threat"
