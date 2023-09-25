import React from 'react';
import DropdownMenu from './DropdownMenu';
import './Header.css';


function Header() {
  return (
    <header>
      <div className="navbar-top">
        <div className="navbar-top-left">
          <a href="https://simplon.co/">Simplon.co</a>
        </div>
        <div className="navbar-top-right">
          <div className="container">
            <a href="https://twitter.com/Simplon_Occ"><img src="/twitter.jpg" alt="twitter" /></a>
            <a href="https://www.linkedin.com/company/simplon-occitanie/"><img src="/in.jpg" alt="linkedIn" /></a>
            <a href="https://www.facebook.com/simplon.occitanie"><img src="/facebook.jpg" alt="facebook" /></a>
          </div>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="navbar-logo"><img src="/simplon occitanie.png" alt="logo simplon" /></div>
        <DropdownMenu className="menu"/>
      </div>
    </header>
  );
}

export default Header;
