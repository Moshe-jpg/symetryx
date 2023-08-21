import React from "react";
import logo from "../../assets/symetryx-logo.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/"><img src={logo} alt="Symetryx"></img></a>
        </nav>
    )
}
export default Navbar;