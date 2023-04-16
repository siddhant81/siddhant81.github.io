import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("resume");

  return (
    <div className="app">
      <header className="app-header">
        <img src="/avatar.jpg" alt="Siddhant Gautam" />
        <h1>Siddhant Gautam</h1>
        <p>Software Engineer at Google</p>
      </header>
      <main className="app-main">
        <nav className="app-nav">
          <button
            className={`app-nav-item ${activeTab === "resume" ? "active" : ""}`}
            onClick={() => setActiveTab("resume")}
          >
            Resume
          </button>
          <button
            className={`app-nav-item ${activeTab === "current-projects" ? "active" : ""}`}
            onClick={() => setActiveTab("current-projects")}
          >
            Current Projects
          </button>
          <button
            className={`app-nav-item ${activeTab === "blog" ? "active" : ""}`}
            onClick={() => setActiveTab("blog")}
          >
            Blog
          </button>
        </nav>
        {activeTab === "resume" && (
          <div className="app-tab">
            <h2>Resume</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              placerat mauris et magna aliquam, at dignissim sem sagittis.
              Donec sit amet tincidunt enim. Aliquam at ornare massa.
              Suspendisse at ante viverra, facilisis lorem ut, dignissim
              diam. Nunc faucibus diam ut massa malesuada, vel tempus velit
              pellentesque. In hac habitasse platea dictumst.
            </p>
          </div>
        )}
        {activeTab === "current-projects" && (
          <div className="app-tab">
            <h2>Current Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              placerat mauris et magna aliquam, at dignissim sem sagittis.
              Donec sit amet tincidunt enim. Aliquam at ornare massa.
              Suspendisse at ante viverra, facilisis lorem ut, dignissim
              diam. Nunc faucibus diam ut massa malesuada, vel tempus velit
              pellentesque. In hac habitasse platea dictumst.
            </p>
          </div>
        )}
        {activeTab === "blog" && (
          <div className="app-tab">
            <h2>Blog</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              placerat mauris et magna aliquam, at dignissim sem sagittis.
              Donec sit amet tincidunt enim. Aliquam at ornare massa.
              Suspendisse at ante viverra, facilisis lorem ut, dignissim
              diam. Nunc faucibus diam ut massa malesuada, vel tempus velit
              pellentesque. In hac habitasse platea dictumst.
            </p>
          </div>
        )}
      </main>
      <footer className="app-footer">
        <p>Copyright 2021 Siddhant Gautam</p>
      </footer>
    </div>
  );
};

export default App;
