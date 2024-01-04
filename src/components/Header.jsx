// Header.jsx
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo"><a href="#top">DeZhaysun</a></div>
      <nav>
        <a href="#portfolio">Portfolio</a>
        <a href="https://www.linkedin.com/in/jasontang03/" target='_'>LinkedIn</a>
        <a href="https://github.com/DeZhaysun/" target='_'>GitHub</a>
        <a href="https://docs.google.com/document/d/17o6XtwAv6yCvKj02NDHwJwbJHLUVMBgfsVwnYkDxEuU/edit?usp=sharing" target='_'>Resumé</a>
        <a href="mailto: shuaihangtang@gmail.com" target='_'>Email</a>
      </nav>
    </header>
  );
}

export default Header;