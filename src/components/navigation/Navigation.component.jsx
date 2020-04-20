import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.styles.scss';

const Navigation = ({ currentLocation }) => {
  return (
    <div className={`${currentLocation === "home" ? 'transparent-nav' : ''} nav-bar row`}>
      <div className="left row">
        <div className="logo"></div>
        <p className="logo-text"></p>
      </div>
      <div className="center row">
        <Link to="#">
          Men
        </Link>
        <Link to="#">
          Women
        </Link>
        <Link to="#">
          Kids
        </Link>
      </div>
      <div className="right row">
        <i className="search-icon"></i>
        <i className="shopping-cart-icon"></i>
        <i className="profile-icon"></i>
        <i className="menu-icon"></i>
      </div>
    </div>
  )
};

export default Navigation;
