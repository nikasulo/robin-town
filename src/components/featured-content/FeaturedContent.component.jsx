import React from 'react';
import FeaturedContentCard from '../featured-content-card/FeaturedContentCard.component';
import './featured_content.styles.scss';

const FeaturedContent = () => {
  return (
    <div className="featured-content row">
      <FeaturedContentCard size={"large"} 
        title={"New arrivals are now in!"} 
        cta={"show collection"} 
        image={"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}/>

      <FeaturedContentCard 
        size={"small"} 
        title={"Basic t-shirts $29,99"} 
        cta={"More details"} 
        image={"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}/>

      <FeaturedContentCard 
        size={"small"} 
        title={"Sale this summer"} 
        cta={"More details"} 
        image={"https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}/>
    </div>
  )
};

export default FeaturedContent;
