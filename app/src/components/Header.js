import React from "react";
import "./Header.css";
import wandererImage from "../Images/wanderer.png";

const Header = () => {
  return (
    <header className="header">
      <img src={require("../Images/wanderer.png")} alt="Wanderer" className="header-avatar" />
      <div className="header-info">
        <h1 className="header-name">Reflections and Ramblings</h1>
        <p className="header-title">By Siddhant Gautam</p>
      </div>
    </header>
  );
};

export default Header;
