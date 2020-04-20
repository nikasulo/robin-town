import React from 'react';
import './featured_content_card.styles.scss';

const FeaturedContentCard = ( { size, title, cta, image } ) => {
  const style = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div className={`featured-content-card ${size} column`} style={style}>
      <div className="overlay column">
        <p className="featured-content-title">{title}</p>
        <button className="featured-content-cta">{cta.toUpperCase()}</button>
      </div>
    </div>
  )
};

export default FeaturedContentCard;
