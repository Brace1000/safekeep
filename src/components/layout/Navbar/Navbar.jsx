import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/dashboard">SafeKeep Admin</Link>
      </div>
      <ul className="navbar-nav">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/alerts">Alerts</Link></li>
        <li><Link to="/">Logout</Link></li> {/* Changed to '/' which is signup */}
      </ul>
    </nav>
  );
};

export default Navbar;