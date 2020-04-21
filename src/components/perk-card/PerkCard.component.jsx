import React from 'react';
import PropTypes from 'prop-types';
import './perk_card.styles.scss';

const PerkCard = ({ perkSymbol, description, title }) => {
  return (
    <div className="perk-card column">
      <div className="perk-icon row">
        <i className={`${perkSymbol}-icon`}></i>
      </div>
      <p className="perk-title">
        {title}
      </p>
      <p className="perk-sub-text">
        {description}
      </p>
    </div>
  )
};

PerkCard.defaultProps = {
  perkSymbol: "",
  description: "",
  title: "",
};

PerkCard.propTypes = {
  perkSymbol: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
};

export default PerkCard;
