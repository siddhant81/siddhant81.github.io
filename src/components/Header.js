import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={require("../Images/wanderer.png")} alt="Wanderer" className="header-avatar" />
      <div className="header-info">
        <h1 className="header-name">Reflections and Ramblings</h1>
        <p className="header-title">By Siddhant Gautam</p>
      </div>
      <div className="header-links">
        <a href="https://www.linkedin.com/in/siddhant-gautam-80aa12147/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="header-icon" />
        </a>
        <a href="https://github.com/siddhant81" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className="header-icon" />
        </a>
        <a href="mailto:siddhant2219@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} className="header-icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
