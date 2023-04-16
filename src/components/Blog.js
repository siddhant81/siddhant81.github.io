import React, { useState } from "react";
import BlogPost from "./BlogPost";
import "./Blog.css";

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  const posts = [
    {
      id: 1,
      title: "Why Yes? I am Changing",
      content:
        "TBA - will feature Tame Impala.",
    },
    {
      id: 2,
      title: "Goes Out for A Run Once",
      content:
        "Running a marathon is a challenging but rewarding goal to strive for. It requires dedication, hard work," +
        "and a commitment to pushing yourself beyond your limits. My goal of running a marathon has been a long time " +
        "in the making, and I am excited to finally take the leap and make it happen. Training for a marathon involves " +
        "a lot of preparation, from building up endurance and stamina to perfecting running form and nutrition. But the payoff " +
        "is immense, with the sense of accomplishment and pride that comes with crossing that finish line. I know it won't " +
        "be easy, but I am determined to put in the effort and make my marathon goal a reality. Through hard work and " +
        "perseverance, I believe that anything is possible.",
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
      <h2>Last Updated: Apr 16, 2023</h2>
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
