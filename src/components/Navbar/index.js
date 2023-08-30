import React from "react";
import logo from "../../assets/symetryx-logo.webp"

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/"><img src={logo} alt="Symetryx"></img></a>
        </nav>
    )
}
export default Navbar;