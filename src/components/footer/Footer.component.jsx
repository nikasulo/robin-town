import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from '../social-icons/SocialIcons.component';
import FooterLinkSection from '../footer-link-section/FooterLinkSection.component';
import './footer.styles.scss';

const Footer = () => {
  return (
    <div className="footer column">
      <div className="left column">
        <div className="logo"></div>
        <div className="sub-text">
          Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown 
          printer took a galley of type and scrambled it to make a 
          type specimen book. It has survived not only five centuries, 
          but also the leap into electronic typesetting, remaining 
          essentially unchanged.
        </div>
        <SocialIcons />
      </div>
      <div className="center-left">
        <FooterLinkSection sectionTitle={"Shopping Online"}>
          <Link className="footer-link">Order Status</Link>
          <Link className="footer-link">Shipping and Delivery</Link>
          <Link className="footer-link">Returns</Link>
          <Link className="footer-link">Payment Options</Link>
          <Link className="footer-link">Contact Us</Link>
        </FooterLinkSection>
      </div>
      <div className="center-right">
        <FooterLinkSection sectionTitle={"Information"}>
          <Link className="footer-link">Gift Cards</Link>
          <Link className="footer-link">Find a store</Link>
          <Link className="footer-link">Newsletter</Link>
          <Link className="footer-link">Become a member</Link>
          <Link className="footer-link">Site Feedback</Link>
        </FooterLinkSection>
      </div>
      <div className="right row">
        <FooterLinkSection sectionTitle={"Contact"}>
          <Link className="footer-link">shop@robintown.com</Link>
          <Link className="footer-link">Hotline: +48 800 900 100 200</Link>
        </FooterLinkSection>
      </div>
    </div>
  )
};

export default Footer;
