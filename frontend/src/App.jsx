import React, { useState } from 'react';
import './style.css';

const initialResume = {
  Name: 'Vidhushi',
  Summary: 'A passionate developer with internship experience.',
  Education: 'B.Tech, Final Year',
  Experience: 'Intern at XYZ Corp.',
  Skills: 'Java, HTML, CSS, JS'
 

};

function App() {
  const [resume, setResume] = useState(initialResume);

  const handleEnhance = async (section) => {
    const response = await fetch('http://localhost:8000/ai-enhance', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ section, content: resume[section] })
    });
    const data = await response.json();
    setResume({ ...resume, [section]: data.enhanced });
  };

  const handleSave = async () => {
    await fetch('http://localhost:8000/save-resume', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(resume)
    });
    alert('Resume saved!');
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(resume, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.json';
    a.click();
  };

  return (
    <div>
      <h1>Resume Editor</h1>
      {Object.keys(resume).map((section) => (
        <div key={section} className="section-container">
          <h3>{section.toUpperCase()}</h3>
          <textarea
            rows={3}
            value={resume[section]}
            onChange={(e) => setResume({ ...resume, [section]: e.target.value })}
          />
          <div className="editor-controls">
            <button onClick={() => handleEnhance(section)}>Enhance with AI</button>
          </div>
        </div>
      ))}
      <button onClick={handleSave}>Save Resume</button>
      <button onClick={handleDownload}>Download as JSON</button>
      <footer>© 2025 Resume Editor by Vidhushi</footer>
    </div>
  );
}

export default App;
