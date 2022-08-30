import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <img className="navLogo" src="../../images/spaceLogo.png" alt="" />
    <h3>Space Travelers&apos; Hub</h3>
    <ul className="nav-links">
      <li><NavLink to="/my-profile">My Profile</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
