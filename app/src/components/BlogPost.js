import React, { useState } from 'react';
import './BlogPost.css';

const BlogPost = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const handlePostClick = () => {
    setExpanded(true);
  };

  const handleBackClick = () => {
    setExpanded(false);
  };

  if (expanded) {
    return (
      <div className="blog-post-expanded" onClick={handleBackClick}>
        <h3>{title}</h3>
        <p>{content}</p>
        <a href="#" className="back-button" onClick={handleBackClick}>
          Back to All Posts
        </a>
      </div>
    );
  }

  return (
    <div className="blog-post" onClick={handlePostClick}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;
