import React from "react";
import EmailForm from "../../helpers/EmailForm/index.js";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-layout-container">
        <div className="contact-container">
          <address className="address">
            <span className="location">2828 Bathurst St, North York, ON</span>
            <span className="location">M6B 3A7</span>
          </address>
          <a href="111-111-1111">111-111-1111</a>
          <a href="mailto:barry@symetryx.com">Barry@Symetryx.com</a>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11535.432018405749!2d-79.4287633!3d43.7134999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33a90fb00001%3A0x9efadacdcd00dad1!2sSymetryx!5e0!3m2!1sen!2sca!4v1692761670663!5m2!1sen!2sca"
            width={400}
            height={300}
            style={{border: "0"}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
        <div className="email-form-container"></div>
      </div>
    </footer>
  );
};

export default Footer;
