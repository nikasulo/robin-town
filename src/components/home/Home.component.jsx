import React, { Fragment } from 'react';
import Hero from '../hero/Hero.component';
import FeaturedContent from '../featured-content/FeaturedContent.component';
import RecommendedProductsList from '../../containers/recommended-products-list/RecommendedProductsList.container';
import NewProductsList from '../../containers/new-products-list/NewProductsList.container';
import SectionHeading from '../section-heading/SectionHeading.component';
import SectionHeadingWithButton from '../section-heading-with-button/SectionHeadingWithButton.component';
import PerkList from '../perk-list/PerkList';

const Home = ( { setCurrentLocation } ) => {
  setCurrentLocation("home");
  
  return (
    <Fragment>
      <Hero />
      <FeaturedContent />
      <SectionHeadingWithButton action={"Show more"} sectionTitle={"Just for you."}/>
      <RecommendedProductsList />
      <PerkList />
      <SectionHeading sectionTitle={"Products in today."}/>
      <NewProductsList />
    </Fragment>
  )
};

export default Home;
