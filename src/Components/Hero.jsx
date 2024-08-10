import React from 'react';
import './Hero.css';
import LeftImage from '../assets/HeroLeft.png'; 
import RightImage from '../assets/HeroRight.png';
import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <img src={RightImage} alt="Left" className="left-image" />
        <Link to="/getstarted" className="get-started-button">Get Started</Link>
      </div>
      <div className="hero-right">
        <img src={LeftImage} alt="Right" className="right-image" />
      </div>
    </section>
  );
}

export default Hero;
