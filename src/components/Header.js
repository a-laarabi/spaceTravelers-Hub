import React from 'react';
import Navbar from './Navbar';
import '../styles/header.css';

function Header() {
  return (
    <header>
      <div className="navLogo">
        <img className="picLogo" src="../../images/spaceLogo.png" alt="spaceLogo" />
        <h3>Space Travelers&apos; Hub</h3>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
