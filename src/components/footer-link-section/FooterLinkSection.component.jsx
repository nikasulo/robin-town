import React from 'react';
import './footer_link_section.styles.scss';

const FooterLinkSection = ({ children, sectionTitle }) => {
  return (
    <div className="footer-link-section column">
      <p className="section-title">{sectionTitle}</p>
      <div className="footer-links column">
        { children }
      </div>
    </div>
  )
};

export default FooterLinkSection;
