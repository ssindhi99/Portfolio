import React from 'react';
import './Resume.css';


const HeaderSection = () => {
  
  const pdfUrl = 'https://drive.google.com/uc?export=download&id=1Gb7bMiEvXlMVVOjTJQfAAQy6FLfuAcwl'; 


  return (
  <div className="resume-header">
    <div className="button-container">

      <a href={pdfUrl} download>
        <button className="download-button">Download Resume</button>
      </a>
    </div>
    <div className="content-container">
      <h1>Sonu Sindhi - Professional Resume</h1>
      <div className="resume-entry">
        <p>This document presents the professional resume of Sonu Sindhi, a skilled Product Manager with experience in financial analysis and research. It outlines his personal details, career objective, educational background, work experience, and key skills.</p>
      </div>
    </div>
  </div>
);}

export default HeaderSection;
