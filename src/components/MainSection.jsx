// MainSection.jsx
import React, { useEffect } from 'react';
import './MainSection.css';

function MainSection() {
  const imgsrc = require(`./images/me.png`)
  return (
    <section className="main-section">
      <div className="intro">
        <img className="my-img" src={imgsrc} alt="ME" />
        <h1 className="typing-text">Hello, I'm Jason Tang!</h1>
        <p className="small-text">Computer Science student at the University of Waterloo (3.9 GPA), graduating 2026. Interested in algorithms and machine learning.</p>
        <p className="small-text">Software engineer with full-stack, data, and infrastructure experience across Android, web, and cloud platforms.</p>
        <p className="small-text"><b>Experience:</b> Meta, Loblaw Digital, Lynx Software Technologies, Wind River, Trend Micro</p>
        <p className="small-text"><b>Languages:</b> Python, C++, TypeScript, JavaScript, C, Kotlin, Java, SQL, HTML, CSS, Bash, Assembly, Groovy</p>
        <p className="small-text"><b>Technologies:</b> Git, FastAPI, MongoDB, AWS, GCP, Jenkins, PostgreSQL, React.js, React Native, Next.js, Node.js, Express.js, Flask, Linux, PyTorch, TensorFlow</p>
      </div>
    </section>
  );
}

export default MainSection;
