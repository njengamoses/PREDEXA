from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class User(BaseModel):
    username: str
    password: str

@router.post("/signup")
def signup(user: User):
    return {"message": f"User {user.username} signed up successfully!"}

@router.post("/login")
def login(user: User):
    return {"message": f"Welcome {user.username}!"}
