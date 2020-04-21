import React from 'react';
import './section_heading_with_button.styles.scss';

const SectionHeadingWithButton = ({ sectionTitle, action }) => {
  return (
    <div className="section-heading row with-button">
      <p className="section-title">{sectionTitle}</p>
      <button className="section-heading-btn">{action}</button>
    </div>
  )
};

export default SectionHeadingWithButton;
