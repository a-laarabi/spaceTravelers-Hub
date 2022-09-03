import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul className="nav-links">
      <li key={1}><NavLink exact activeClassName="active" to="./">Rockets</NavLink></li>
      <li key={2}><NavLink ctiveClassName="active" to="/Mission">Mission</NavLink></li>
      <li>|</li>
      <li key={3}><NavLink ctiveClassName="active" to="/my-profile">My_Profile</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
