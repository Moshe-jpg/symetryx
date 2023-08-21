import React from "react";
import Navbar from "../Navbar";
import LogoList from "../../logoList";
import EmailForm from "../../helpers/EmailForm/index.js";

const Homepage = () => {

  return (
    <div className="homepage-container">
        <Navbar />
      <a href="/">
        <h1>Symetryx Corp.<span className="homepage-subheading">Private Investments</span></h1>
      </a>
        <LogoList />
        <footer className="footer">
        <div className="contact-layout-container">
          <div className="contact-container">
            <header className="contact-form-header">
              <h2>Contact Me</h2>
            </header>
    
          </div>
          <div className="email-form-container">
            <EmailForm />
          </div>
        </div>
        </footer>
    </div>
  );
};

export default Homepage;
