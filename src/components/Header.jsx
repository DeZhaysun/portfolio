// Header.jsx
import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo"><a href="#top">Jason Tang</a></div>
        <button
          className={`nav-toggle ${isNavVisible ? 'active' : ''}`}
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={isNavVisible ? 'active' : ''}>
          <a href="#experience">Experience</a>
          <a href="#portfolio">Projects</a>
          <a href="/portfolio/resume.pdf" target="_blank" rel="noopener noreferrer">Resumé</a>
          <a className="icon-link" href="https://www.linkedin.com/in/jasontang03/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-2 6.5h4v10h-4V10Zm7 0h3.8v1.4h.05c.53-.95 1.84-1.95 3.79-1.95 4.05 0 4.8 2.67 4.8 6.15V20h-4v-4.6c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.77 1.2-1.77 2.44V20h-4V10Z" />
            </svg>
          </a>
          <a className="icon-link" href="https://github.com/DeZhaysun/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.36 1.08 2.94.83.09-.65.35-1.08.63-1.33-2.21-.25-4.54-1.1-4.54-4.91 0-1.08.38-1.97 1.02-2.66-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.23 1.65-.34 2.5-.34.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.69 1.02 1.58 1.02 2.66 0 3.82-2.33 4.65-4.55 4.9.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
            </svg>
          </a>
          <a className="icon-link" href="mailto:dezhaysun@gmail.com" aria-label="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.3l8 5.1 8-5.1V7H4Zm16 10V9.4l-7.45 4.76a1 1 0 0 1-1.1 0L4 9.4V17h16Z" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
