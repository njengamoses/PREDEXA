# backend/routers/churn.py
from fastapi import APIRouter
from pydantic import BaseModel
from . import reports  # import the reports module

router = APIRouter()

class ChurnInput(BaseModel):
    customer_id: str
    features: list

@router.post("/churn/predict")
def predict_churn(data: ChurnInput):
    # 🔹 fake churn prediction logic for now
    prediction = "Churn" if sum(data.features) > 50 else "No Churn"

    # 🔹 log into reports
    reports.reports.append({
        "date": reports.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "type": "Churn Prediction",
        "result": f"Customer {data.customer_id}: {prediction}"
    })

    return {"customer_id": data.customer_id, "prediction": prediction}
