import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  <header>
    <img className="navLogo" src="../../images/spaceLogo.png" alt="spaceLogo" />
    <h3>Space Travelers&apos; Hub</h3>
    <nav className="navbar">
      <ul className="nav-links">
        <li key={1}><NavLink to="./">Rockets</NavLink></li>
        <li key={2}><NavLink to="/dragons">Dragons</NavLink></li>
        <li key={3}><NavLink to="/Mission">Mission</NavLink></li>
        <li key={4}><NavLink to="/my-profile">My Profile</NavLink></li>
      </ul>
    </nav>
  </header>;
};

export default Header;
