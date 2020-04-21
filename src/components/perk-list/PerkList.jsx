import React, { Fragment } from 'react';
import './perk_list.styles.scss';
import SectionHeading from '../section-heading/SectionHeading.component';
import PerkCard from '../perk-card/PerkCard.component';

const PerkList = () => {
  return (

    <Fragment>
      <div className="perk-list column">
        <SectionHeading sectionTitle={"Why Should You Choose Us?"}/>
        <div className="row-with-wrap">
          <PerkCard 
            perkSymbol={"truck"} 
            title={"Free Shipping"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
          />
          <PerkCard 
            perkSymbol={"credit-card"} 
            title={"Easy Payments"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
          />
          <PerkCard 
            perkSymbol={"money-bill"} 
            title={"Money-Back Guarantee"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
          />
          <PerkCard 
            perkSymbol={"smile-wink"} 
            title={"Finest Quality"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
          />
        </div>
        </div>
    </Fragment>
  )
};

export default PerkList;
