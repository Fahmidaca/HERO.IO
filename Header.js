import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // Assume we create CSS

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/assets/logo.png" alt="Hero IO" />
          <span className="site-name">HERO.IO</span>
        </Link>
      </div>
      <nav className="nav">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/apps" className={location.pathname === '/apps' ? 'active' : ''}>Apps</Link>
        <Link to="/installation" className={location.pathname === '/installation' ? 'active' : ''}>Installation</Link>
      </nav>
      <a href="https://github.com/yourusername" className="contribution-btn" target="_blank" rel="noopener noreferrer">
        <img src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg" alt="GitHub" className="github-icon" />
        Contribute
      </a>
    </header>
  );
};

export default Header;
