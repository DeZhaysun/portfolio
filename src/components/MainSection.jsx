// MainSection.jsx
import React from 'react';
import './MainSection.css';

function MainSection() {
  const imgsrc = require(`./images/me.png`)
  return (
    <section className="main-section" id="top">
      <div className="hero container">
        <div className="intro">
          <p className="eyebrow">Software Engineer • Full-Stack • ML</p>
          <h1 className="typing-text">Hello, I'm Jason Tang.</h1>
          <p className="lead">Computer Science student at the University of Waterloo, graduating 2026. Interested in algorithms and machine learning.</p>
          <p className="lead">Software engineer with full-stack, data, and infrastructure experience across Android, web, and cloud platforms.</p>
          <div className="cta-row">
            <a className="btn primary" href="#portfolio">View projects</a>
            <a
              className="btn ghost"
              href="/portfolio/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resumé
            </a>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <span>Experience</span>
              <p>Meta • Loblaw Digital • Lynx Software Technologies • Wind River • Trend Micro</p>
            </div>
            <div className="info-card">
              <span>Languages</span>
              <p>Python, C++, TypeScript, JavaScript, C, Kotlin, Java, SQL, HTML, CSS, Bash, Assembly, Groovy</p>
            </div>
            <div className="info-card">
              <span>Technologies</span>
              <p>Git, FastAPI, MongoDB, AWS, GCP, Jenkins, PostgreSQL, React.js, React Native, Next.js, Node.js, Express.js, Flask, Linux, PyTorch, TensorFlow</p>
            </div>
          </div>
        </div>
        <div className="intro-media">
          <div className="image-glow" aria-hidden="true"></div>
          <img className="my-img" src={imgsrc} alt="Jason Tang" />
        </div>
      </div>
    </section>
  );
}

export default MainSection;
