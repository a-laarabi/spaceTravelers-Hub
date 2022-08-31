import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul className="nav-links">
      <li key={1}><NavLink to="./">Rockets</NavLink></li>
      <li key={2}><NavLink to="/dragons">Dragons</NavLink></li>
      <li key={3}><NavLink to="/Mission">Mission</NavLink></li>
      <li key={4}><NavLink to="/my-profile">My Profile</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
