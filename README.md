# Resume Editor – Internship Assignment

This project is a web-based **Resume Editor**, built for the internship assignment. It allows users to:

- Upload and edit resume content
- Enhance individual sections using a mock AI backend
- Save and retrieve resume data via FastAPI
- Download the final resume as a `.json` file
---
## Project Structure
resume-editor-enhanced/
│
├── frontend/ --> React.js application
├── backend/ --> FastAPI application
└── README.md --> Project documentation
---
## Features
### Frontend (React.js)
- Upload `.pdf` or `.docx` (mock parsed to dummy data)
- Edit fields: name, summary, experience, education, skills
- Add and remove entries in each section
- “Enhance with AI” button beside each section
- Save the entire resume to backend
- Download resume as a `.json` file
### Backend (FastAPI)
- **POST /ai-enhance** – Receives section data, returns improved version (mocked)
- **POST /save-resume** – Accepts full resume JSON and saves to disk
- **GET /get-resume** – Returns the saved resume JSON (if exists)
---
## Technologies Used

- **Frontend**: React.js, JavaScript, HTML, CSS
- **Backend**: FastAPI, Python
- **API Communication**: Axios (HTTP requests)
- **File Format**: JSON (for saving and downloading resume)
---
## Setup Instructions
### Backend (FastAPI)
```bash
cd backend
python -m venv venv
source venv/bin/activate        # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
------
Frontend (React.js)
cd frontend
npm install
npm start
---
Sample Use Case
1. User uploads a .pdf resume (mocked content appears)
2. Edits each section like name, summary, skills
3. Clicks “Enhance with AI” to auto-improve each section
4. Clicks “Save” to save resume to backend
5. Downloads final resume as resume.json
---
Author
Name: vidhushi
GitHub: https://github.com/vidhushii
Email: vidhushi8434@gmail.com

