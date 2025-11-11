import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src="/assets/logo.png" alt="HERO.IO Logo" className="footer-logo" />
          <span className="footer-brand">HERO.IO</span>
        </div>
        <div className="footer-right">
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/x.svg" alt="X (Twitter)" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/facebook.svg" alt="Facebook" />
            </a>
          </div>
          <p>Copyright © 2025 - All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
