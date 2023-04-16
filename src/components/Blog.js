import React from "react";
import { Link } from "react-router-dom";
import posts from "./posts";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <h2>Last Updated: Apr 16, 2023</h2>
      {posts.map((post) => (
        <div key={post.id} className="blog-post">
          <Link to={`/blogs/${post.id}`} className="blog-post-text">
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}...</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
