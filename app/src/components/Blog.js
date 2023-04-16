import React, { useState } from "react";
import BlogPost from "./BlogPost";
import "./Blog.css";

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  const posts = [
    {
      id: 1,
      title: "Why Bay Area is Shit",
      content:
        "TBA",
    },
    {
      id: 2,
      title: "Why Bangalore is a little less shit",
      content:
        "Sed elementum volutpat lectus a fermentum. Pellentesque eget dolor velit. Nullam vestibulum commodo purus. Ut eget tellus mauris. Aenean vitae diam in sapien interdum euismod. Integer nec tincidunt nulla. Maecenas ac lorem sed orci dictum molestie in eget eros.",
    },
  ];

  const handlePostClick = (postId) => {
    if (postId === expandedPost) {
      setExpandedPost(null);
    } else {
      setExpandedPost(postId);
    }
  };

  return (
    <div className="blog-container">
      <h2>Reflections and Ramblings</h2>
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          title={post.title}
          content={post.content}
          expanded={post.id === expandedPost}
          onPostClick={handlePostClick}
        />
      ))}
    </div>
  );
};

export default Blog;
