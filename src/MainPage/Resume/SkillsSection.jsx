import React from 'react';
import './Resume.css';

const SkillsSection = () => (
  <div className="resume-card no-margin">
    <h1>Skills and Competencies</h1>
    <div className="flex-container">

    <div className="skills-flex">
        <i className="icon fa fa-laptop"></i>
        <h2>Technical Skills</h2>
        <p>HTML, CSS, Javascript, Reactjs, Redux</p>
      </div>

      <div className="skills-flex">
  <i className="icon fa fa-file-alt"></i>
  <h2>MS Office</h2>
  <p>PowerPoint, Excel, Word, Power BI</p>
</div>


      <div className="skills-flex">
        <i className="icon fa fa-users"></i>
        <h2>Interpersonal Skills</h2>
        <p>Conflict resolution, Communication, Teamwork, Positive Attitude</p>
      </div>

      <div className="skills-flex">
        <i className="icon fa fa-cogs"></i>
        <h2>Work Qualities</h2>
        <p>Adaptability, Analytical skills, Flexibility</p>
      </div>

      <div className="skills-flex">
      <i className="icon fa fa-lightbulb"></i>
        <h2>Professional Attributes</h2>
        <p>Quick learner, Responsibility, Attention to Detail, Goal-Oriented</p>
      </div>
    </div>
  </div>
);

export default SkillsSection;
