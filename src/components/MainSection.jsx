// MainSection.jsx
import React, { useEffect } from 'react';
import './MainSection.css';

function MainSection() {
  const imgsrc = require(`./images/me.jpg`)
  return (
    <section className="main-section">
      <div className="intro">
        <img className="my-img" src={imgsrc} alt="ME" />
        <h1 className="typing-text">Hello, I'm Jason!</h1>
        <p className="small-text">I am a results-driven software developer experienced in full-stack app development, algorithms, and database management.</p>
        <p className="small-text">Current Computer Science student at the University of Waterloo. Interested in Algorithms and Machine Learning.</p>
        <p className="small-text"><b>Experience:</b> Software Developer at Trend Micro, Wind River, CoreAVI and QA at Peekapak</p>
        <p className="small-text"><b>Languages:</b> Python, C++, JavaScript, C, Typescript, Java, SQL, HTML, CSS, Bash, Assembly, Groovy</p>
        <p className="small-text"><b>Technologies:</b> FastAPI, MongoDB, AWS, Docker, Jenkins, PostgreSQL, React.js, React Native, Node.js, Express.js, Flask,
WebSocket, Cypress, Linux, Git, NumpPy, Matplotlib, Jupyter Notebook, PyTorch, TensorFlow, Pandas, OpenAI API</p>
      </div>
    </section>
  );
}

export default MainSection;
