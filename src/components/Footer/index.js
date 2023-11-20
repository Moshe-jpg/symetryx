import React, { useRef, useEffect } from "react";
import RunContactAnimation from "../../helpers/animations/RunContactAnimation";
import EmailForm from "../../helpers/EmailForm/index.js";
import email from "../../assets/email.webp";
import mgLogo from "../../assets/moshe-gadol-logo.webp";

const Footer = () => {
  const ContactRef = useRef(null);

  useEffect(() => {
    RunContactAnimation(ContactRef.current);
  });

  return (
    <footer className="footer" ref={ContactRef}>
      <div className="bubble one"></div>
      <div className="bubble two"></div>
      <div className="contact-layout-container">
        <div className="contact-container">
          <address className="address">
            <span className="location">
              <a href="https://goo.gl/maps/ZLE4Nd7Wkm22uAzQ8">
                Symetryx Corporation
                <br />
                2828 Bathurst Street
                <br />
                Suite 400
                <br />
                Toronto, Ontario, Canada
                <br />
                M6B 3A3
              </a>
            </span>
          </address>
          <div className="hyperlink-container">
            <a href="mailto:info@symetryx.com">
              <img src={email} alt="contact by email"></img>
              <span>info@symetryx.com</span>
            </a>
          </div>
        </div>
        <EmailForm />
      </div>
      <p className="last-p">
        Symetryx Corporation&copy; 2023
        <br />
        All Rights Reserved
      </p>
      <div className="website-container">
        <p>Website created by</p>&nbsp;
        <a href="https://gadol.dev/">
          <img src={mgLogo} alt="Moshe Gadol Portfolio Site"></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
