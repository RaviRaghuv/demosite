import React from 'react';
import './Footer.css';

import Twitter from '../../assets/twitter.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Whatsapp from '../../assets/whatsapp.png';
import Email from '../../assets/email.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />

      <div className="footer">
        <div className="social-links">

          {/* Twitter */}
          <a href="https://twitter.com/rahulrajpck" target="_blank" rel="noreferrer">
            <img src={Twitter} alt="Twitter" />
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/_.ravi_12/" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/ravi-kumar-b2110223a" target="_blank" rel="noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919102538170?text=Hi%20I%20am%20interested%20in%20your%20fitness%20programs"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Whatsapp} alt="WhatsApp" />
          </a>

          {/* Email */}
          <a href="mailto:ravikumarswn28@gmail.com">
            <img src={Email} alt="Email" />
          </a>

        </div>

        <div className="logo-f">
          <img src={Logo} alt="FitClub Logo" />
        </div>
      </div>

      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
