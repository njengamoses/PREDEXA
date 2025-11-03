from fastapi import FastAPI
from routers import auth, churn, threat
from routers import report


app = FastAPI(title="Predexa Backend")

# Routers
app.include_router(auth.router, prefix="/auth")
app.include_router(churn.router, prefix="/churn")
app.include_router(threat.router, prefix="/threat")
app.include_router(report.router) 


@app.get("/")
def root():
    return {"message": "Welcome to Predexa Backend!"}
