import React from 'react';
import './Navbar.css';
import image1 from '../assets/image1.png';
import Predict from '../assets/Predict.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
            <img src={image1} alt="Login" />
            <img src={Predict} alt="Login" />
        </div>
        <div className="nav-links">
          <a href="/" className="nav-link">Company</a>
          <a href="/resources" className="nav-link">Brand</a>
          <a href="#testimonial-heading" className="nav-link">Investors</a>
          <a href="/contact" className="nav-link">Careers</a>
        </div>
        <div className="contact-button">
          <a href="" className="contact">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
