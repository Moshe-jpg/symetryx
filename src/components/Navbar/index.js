import React from "react";
import logo from "../../assets/symetryx-logo.webp";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} alt="Symetryx"></img>
        <div style={{ overflow: "hidden" }}>
          <h1 className="homepage-heading">Symetryx Corporation</h1>
        </div>
      </a>
    </nav>
  );
};
export default Navbar;
