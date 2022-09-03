import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul className="nav-links">
      <li><NavLink to="./">Rockets</NavLink></li>
      <li><NavLink to="/Mission">Mission</NavLink></li>
      <li>|</li>
      <li><NavLink to="/my-profile">My_Profile</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
