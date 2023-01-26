import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <Link to="/">BrandName</Link>
      </div>
      <div className="nav-middle">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/estimate">Estimate</Link>
      </div>
      <div className="nav-right">
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
