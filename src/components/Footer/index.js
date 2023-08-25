import React from "react";
import EmailForm from "../../helpers/EmailForm/index.js";
import mgLogo from "../../assets/moshe-gadol-logo.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-layout-container">
        <div className="contact-container">
          <address className="address">
            <span className="location">2828 Bathurst St<br />North York, ON<br />M6B 3A7</span>
            <a href="111-111-1111">111-111-1111</a>
            <a href="mailto:barry@symetryx.com">Barry@Symetryx.com</a>
          </address>

          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11535.432018405749!2d-79.4287633!3d43.7134999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33a90fb00001%3A0x9efadacdcd00dad1!2sSymetryx!5e0!3m2!1sen!2sca!4v1692761670663!5m2!1sen!2sca"
            width={300}
            height={300}
            style={{ border: "0", width: "350px", height: "250px", margin: "25px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
        <EmailForm />
      </div>
      <p className="last-p">Symetryx Corp.&copy; 2023<br />All Rights Reserved</p>
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
