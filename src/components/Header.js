import React from "react";
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
            <img src={require("../Images/linkedin.png")} alt="LinkedIn" className="header-icon" />
          </a>
          <a href="mailto:siddhant2219@gmail.com" target="_blank" rel="noreferrer">
            <img src={require("../Images/email.png")} alt="Email" className="header-icon" />
          </a>
        </div>

    </header>
  );
};

export default Header;
