import { useState } from "react";

function HeroSection() {
  const pdfUrl = 'https://docs.google.com/document/d/1nrcctP1mayWMC6ZGdm-lbjUvkzV-JChj/export?format=pdf'; 

  return (
    <header className="hero-section">
      <div className="hero-left">
        <div className="hero-heading">
          <h1>Hello, I am Sonu Sindhi</h1>
          <h2>Frontend Developer</h2>
        </div>
        <div className="hero-paragraph">
          <p>
<strong>Welcome to my digital space! </strong> My journey combines a passion for web development with a focus on building seamless, user-friendly experiences.
          </p>
<p>
I specialize in crafting intuitive and responsive websites using modern technologies like ReactJS and Redux. From designing sleek interfaces to implementing dynamic features, I enjoy turning ideas into functional and visually appealing web solutions.
          </p>

          
          <p>
Feel free to explore my projects, learn more about my skills, or get in touch to collaborate. Together, we can create something remarkable—one line of code at a time!
          </p>
          <p>
          </p>

          
        </div>
        <div className="download-cv">
          <a href={pdfUrl} download>
            <button>Download CV</button>
          </a>
        </div>
      </div>

      <div className="image-container">
        <img src="https://i.ibb.co/k4dfqN7/Whats-App-Image-2024-11-11-at-00-09-36-2b8d1345.jpg" alt="Profile" />
      </div>
    </header>
  );
}

export default HeroSection;
