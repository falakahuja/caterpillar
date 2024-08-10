import React from 'react';
import './Navbar.css';
import Catpredict from '../assets/Catpredict.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={Catpredict} alt="Logo" />
        </div>
        <div className="nav-links">
          <a href="/" className="nav-link">Company</a>
          <a href="/resources" className="nav-link">Brand</a>
          <a href="#testimonial-heading" className="nav-link">Investors</a>
          <a href="/contact" className="nav-link">Careers</a>
        </div>
        <div className="contact-button">
          <a href="#contact" className="contact">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
