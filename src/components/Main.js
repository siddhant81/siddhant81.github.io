import React from "react";
import Resume from "./Resume";
import CurrentProjects from "./CurrentProjects";
import Blog from "./Blog";
import "./Main.css";

const Main = ({ activeTab, setActiveTab }) => {
  return (
    <main className="app-main">
      <nav className="app-nav">
        <button
          className={`app-nav-item ${activeTab === "blog" ? "active" : ""}`}
          onClick={() => setActiveTab("blog")}
        >
          Blog
        </button>
        <button
          className={`app-nav-item ${activeTab === "current-projects" ? "active" : ""
            }`}
          onClick={() => setActiveTab("current-projects")}
        >
          Current Projects
        </button>
        <button
          className={`app-nav-item ${activeTab === "resume" ? "active" : ""}`}
          onClick={() => setActiveTab("resume")}
        >
          Resume
        </button>

      </nav>
      {activeTab === "resume" && <Resume />}
      {activeTab === "current-projects" && <CurrentProjects />}
      {activeTab === "blog" && <Blog />}
    </main>
  );
};

export default Main;
