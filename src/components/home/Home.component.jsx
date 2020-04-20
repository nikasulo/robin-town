import React, { Fragment } from 'react';
import Hero from '../hero/Hero.component';
import FeaturedContent from '../featured-content/FeaturedContent.component';

const Home = ( { setCurrentLocation } ) => {
  setCurrentLocation("home");
  
  return (
    <Fragment>
      <Hero />
      <FeaturedContent />
    </Fragment>
  )
};

export default Home;
