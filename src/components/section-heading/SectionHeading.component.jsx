import React from 'react';
import './section_heading.styles.scss';

const SectionHeading = ({ sectionTitle }) => {
  return (
    <div className="section-heading row">
      <p className="section-title">{sectionTitle}</p>
    </div>
  )
};

export default SectionHeading;
