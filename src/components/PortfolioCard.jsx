// PortfolioCard.jsx
import React from 'react';
import './PortfolioCard.css'; // Import your CSS file

function PortfolioCard() {
  return (
    <article className="portfolio-card">
      <img src="project_image_url" alt="Project Logo" />
      <div className="project-details">
        <h2>Project Name</h2>
        <p className="hackathon-winner">Winner of XYZ Hackathon</p>
        <h3>Tech Stack</h3>
        <p>Project description...</p>
      </div>
    </article>
  );
};

export default PortfolioCard;
