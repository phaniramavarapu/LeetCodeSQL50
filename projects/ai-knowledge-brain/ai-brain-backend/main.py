from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Temporary storage
notes = []

# Note model
class Note(BaseModel):
    title: str
    content: str

@app.get("/")
def home():
    return {"message": "AI Brain Backend Running"}

@app.post("/add-note")
def add_note(note: Note):
    notes.append(note)
    return {"message": "Note added successfully", "note": note}

@app.get("/notes")
def get_notes():
    return notes