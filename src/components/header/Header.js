import React from 'react'
import logo from './logo.png';
import './header.scss';
import 'boxicons';
import avatar from './avatar.jpg';

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="" />
      </div>
      <div className="header-content-account">
        <img src={avatar} alt="" />
      </div>
    </div>
  );
}

export default Header;
