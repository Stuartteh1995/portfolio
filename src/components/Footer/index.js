import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        By Stuart Teh</p>
      <div className="icons">
      <a href="https://www.linkedin.com/in/stuart-teh-1a6971198/" target="_blank" rel="noreferrer">
  <FontAwesomeIcon icon={faLinkedin} className="icon" size="2x" />
</a>
<a href="https://github.com/Stuartteh1995" target="_blank" rel="noreferrer">
  <FontAwesomeIcon icon={faGithub} className="icon" size="2x" />
</a>

      </div>
    </footer>
  );
}

export default Footer;
