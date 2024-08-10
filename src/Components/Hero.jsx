import React from 'react';
import './Hero.css';
import LeftImage from '../assets/HeroLeft.png'; 
import RightImage from '../assets/HeroRight.png'; 

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <img src={RightImage} alt="Left" className="left-image" />
        <a href="#get-started" className="get-started-button">Get Started</a>
      </div>
      <div className="hero-right">
        <img src={LeftImage} alt="Right" className="right-image" />
      </div>
    </section>
  );
}

export default Hero;
