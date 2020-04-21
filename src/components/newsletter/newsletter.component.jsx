import React from 'react';
import './newsletter.styles.scss';

const Newsletter = () => {
  const style = {
    backgroundImage: `url(${"https://images.unsplash.com/photo-1587222723089-b623c881a8eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"})`
  }

  return (
    <div className="newsletter column">
      <div className="newsletter-background" style={style}>
        <div className="overlay column">
          <div className="newsletter-cta-text-holder">
            <p className="newsletter-cta-text">
              Subscribe to our newsletter and receive exclusive offers every week
            </p>
          </div>
          <div className="newsletter-cta-holder">
            <div className="newsletter-input-holder column">
              <input type="text" placeholder="Enter your email" className="newsletter-input"/>
              <button className="newsletter-cta">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Newsletter;
