import React from "react";
import Navbar from "../Navbar";
import LogoList from "../../logoList";
import Footer from "../Footer";

const Homepage = () => {

  return (
    <div className="homepage-container">
        <Navbar />
      <a href="/">
        <h1>Symetryx Corp.<span className="homepage-subheading">Private Investments</span></h1>
      </a>
        <LogoList />
        <Footer />
    </div>
  );
};

export default Homepage;
