import React from "react";
import "./CurrentProjetcs.css";

const CurrentProjects = () => {
  return (
    <div className="current-projects-container">
      <h2>Current Projects</h2>
      <div className="current-projects-grid">
        <div className="current-projects-item">
          <h3>Project 1</h3>
          <p>
            Chat App with Sheldon and RC.
          </p>
          <a href="https://github.com/aarcee141/chat-app">View project</a>
        </div>
      </div>
    </div>
  );
};

export default CurrentProjects;
