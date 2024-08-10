import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a href="#contact">Contact Site</a>
        <a href="#map">Map</a>
        <a href="#accessibility">Accessibility</a>
        <a href="#cookie-settings">Cookie Settings</a>
        <a href="#legal-privacy">Legal Privacy</a>
      </div>
      <div className="footer-right">
        <p>© 2024 Caterpillar. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
