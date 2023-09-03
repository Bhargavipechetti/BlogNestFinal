import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="custom-navbar">
      <Link className="navbar-brand" to="/">
        <img src="/images/logo.png" alt="logo" className="img-style" />
      </Link>
      <div className="nav-links">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
