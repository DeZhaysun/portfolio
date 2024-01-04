// MainSection.jsx
import React, { useEffect } from 'react';
import './MainSection.css';

function MainSection() {
  return (
    <section className="main-section">
      <div className="intro">
        <h1 className="typing-text">Hello, I'm Jason!</h1>
        <p className="small-text">I am a results-driven software developer experienced in full-stack app development, API integration, and database management.</p>
        <p className="small-text">Current Computer Science student at the University of Waterloo. Interested in Cloud Computing and Data Science.</p>
      </div>
    </section>
  );
}

export default MainSection;
