import React from "react";
import ".//Navbar.css";
import { Link, Router, useHistory } from "react-router-dom";

export const NavBar = () => {
  return (
    <ul className="navbar">
      <div className="navbar__item active">
        <Link className="navbar_link" to="/about_me">About Me</Link>
      </div>

      <div className="navbar__item active">
        <Link className="navbar_link" to="/resume">Resume</Link>
      </div>

      <div className="navbar__item active">
        <Link className="navbar_link" to="/portfolio">Portfolio</Link>
      </div>

      <div className="navbar__item active">
        <Link className="navbar_link" to="/links">My Links</Link>
      </div>
    </ul>
  );
};
