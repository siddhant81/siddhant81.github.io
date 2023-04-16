import React from "react";
import { Link, useParams } from "react-router-dom";
import posts from "./posts";
import "./BlogPost.css";

const BlogPost = () => {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === parseInt(postId));
  
  return (
    <div className="blog-post-expanded">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <Link to="/blog" className="back-button">
        Back to All Posts
      </Link>
    </div>
  );
};

export default BlogPost;
