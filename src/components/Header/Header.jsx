import React from 'react';
import toody from '../../images/toody.svg';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <div className="logo">
          <img src={toody} alt="" />
          Nunito
        </div>
      </a>
      <a href="/profile" className="profile-link">
        My Profile
      </a>
    </div>
  );
};

export default Header;
