import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className="portfolio__header">
      <div className="header__link">
        <a href="/#projects">Projects</a>
      </div>
      <div className="header__link">
        <a href="/#contact">Say Hello</a>
      </div>
    </div>
  );
}
