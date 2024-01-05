// PortfolioCard.jsx
import React from 'react';
import './PortfolioCard.css';

function PortfolioCard({ projectName, hackathon, techStack, description, githubLink, projectImage}) {
  const imgsrc = require(`./images/${projectImage}`)
  return (
    <article className="portfolio-card">
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img src={imgsrc} alt="Project Logo" />
        <div className="project-details">
          <h2>{projectName}</h2>
          <p className="hackathon-winner">{hackathon}</p>
          <h3>{techStack}</h3>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </a>
    </article>
  );
}

export default PortfolioCard;
