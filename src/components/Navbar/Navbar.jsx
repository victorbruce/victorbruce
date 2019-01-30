import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="wrapper">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
