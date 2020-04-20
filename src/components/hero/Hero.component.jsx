import React from 'react';
import './hero.styles.scss';

const Hero = () => {
  return (
    <div className="hero column">
      <div className="overlay column">
        <h2 className="hero-text">Sale of the summer collection</h2>
        <div className="cta-holder row">
          <i className="arrow-right-icon"></i>
          <p className="cta-text">SHOP NOW</p>
        </div>
      </div>
    </div>
  )
};

export default Hero;
