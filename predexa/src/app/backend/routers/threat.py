# backend/routers/threat.py
from fastapi import APIRouter
from pydantic import BaseModel
from . import reports  # import the reports module

router = APIRouter()

class ThreatInput(BaseModel):
    log_id: str
    features: list

@router.post("/threat/predict")
def predict_threat(data: ThreatInput):
    # 🔹 fake threat detection logic
    prediction = "Threat" if sum(data.features) > 75 else "Safe"

    # 🔹 log into reports
    reports.reports.append({
        "date": reports.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "type": "Threat Detection",
        "result": f"Log {data.log_id}: {prediction}"
    })

    return {"log_id": data.log_id, "prediction": prediction}
