from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EnhanceRequest(BaseModel):
    section: str
    content: str

@app.post("/ai-enhance")
def enhance_section(request: EnhanceRequest):
    return {"enhanced": f"Improved: {request.content}"}

@app.post("/save-resume")
def save_resume(resume: dict):
    with open("saved_resume.json", "w") as f:
        import json
        json.dump(resume, f, indent=2)
    return {"message": "Resume saved successfully"}
