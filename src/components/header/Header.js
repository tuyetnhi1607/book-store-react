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
      <div className="header-content">
        <div className="header-content-search">
           <input placeholder="Search" />
         <i class="bx bx-search"></i>
        </div>
        <div className="header-content-account">
            <img src={avatar} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Header;
