import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import CurrentProjects from "./CurrentProjects";
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import posts from "./posts";
import "./Main.css";

const Main = () => {
  return (
    <Router>
      <main className="app-main">
        <nav className="app-nav">
          <Link
            className="app-nav-item"
            activeClassName="active"
            to="/"
          >
            Home
          </Link>
          <Link
            className="app-nav-item"
            activeClassName="active"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className="app-nav-item"
            activeClassName="active"
            to="/current-projects"
          >
            Current Projects
          </Link>
          <Link
            className="app-nav-item"
            activeClassName="active"
            to="/resume"
          >
            Resume
          </Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/current-projects" element={<CurrentProjects />} />
          <Route exact path="/blog" element={<Blog />} />
          {posts.map((post) => (
            <Route
              key={post.id}
              path={`/blogs/:postId`}
              element={<BlogPost />}
            />
          ))}
        </Routes>
      </main>
    </Router>
  );
};

export default Main;
