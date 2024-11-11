import React from 'react';
import './Resume.css';

const EducationalSection = () => (
  <div className="resume-card">
    <h1>Educational Background</h1>
    <div className="resume-education">
      <div className="resume-entry resumetext">
        <h2>Master of Commerce</h2>
        <p>Maharaja Sayajirao University of Baroda, Gujarat</p>
        <p>June 2014 - May 2016</p>
        <p>Specialisation: Cooperative management</p>
      </div>
      <div className="resume-entry resumetext">
        <h2>Bachelor of Commerce</h2>
        <p>Maharaja Sayajirao University of Baroda, Gujarat</p>
        <p>June 2011 - May 2014</p>
        <p>Specialisation: Accounts</p>
      </div>
    </div>
  </div>
);

export default EducationalSection;
