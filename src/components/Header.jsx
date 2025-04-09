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
      <div className="logo"><a href="#top">DeZhaysun</a></div>
      <div className={`nav-toggle ${isNavVisible ? 'active' : ''}`} onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={isNavVisible ? 'active' : ''}>
        <a href="#portfolio-header">Portfolio</a>
        <a href="https://www.linkedin.com/in/jasontang03/" target='_'>LinkedIn</a>
        <a href="https://github.com/DeZhaysun/" target='_'>GitHub</a>
        <a href="https://drive.google.com/file/d/1_xXIDRAf4EavCGt0nvYEIoG4foX5qDh4/view?usp=sharing" target='_'>Resumé</a>
        <a href="mailto: dezhaysun@gmail.com" target='_'>Email</a>
      </nav>
    </header>
  );
}

export default Header;
