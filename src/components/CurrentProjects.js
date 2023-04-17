import React from "react";
import "./CurrentProjetcs.css";

const CurrentProjects = () => {
  return (
    <div className="current-projects-container">
      <h2>Current Projects</h2>
      <div className="current-projects-grid">
        <div className="current-projects-item">
          <h3>Chat App</h3>
          <p>
            E2E Chat App with Sheldon and RC.
          </p>
          <a href="https://github.com/aarcee141/chat-app">View project</a>
        </div>
        <div className="current-projects-item">
          <h3>Sign Launguage To Text</h3>
          <p>
            Converts American sign language to text in realtime. 
            <el></el>College project with teammates.
          </p>
          <a href="https://github.com/luvk1412/Sign-Language-to-Text">View project</a>
        </div>

      </div>
    </div>
  );
};

export default CurrentProjects;
