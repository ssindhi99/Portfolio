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
            Skilled in React.js, Vite.js, and modern web technologies, focused on
            creating responsive, user-friendly applications.
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
