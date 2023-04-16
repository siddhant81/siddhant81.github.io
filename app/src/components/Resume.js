import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <div className="resume-container">
        <section>
          <h3>Education</h3>
          <div className="resume-item">
            <h4>Indian Institute Of Information Technology, Allahabad</h4>
            <p>B.Tech. Information Technology, 2016-2020</p>
          </div>
        </section>
        <section>
          <h3>Experience</h3>
          <div className="resume-item">
            <h4>Software Engineer, Google</h4>
            <p>2020-Present</p>
            <ul>
              <li>Work on Google Shopping Ads.</li>
              <li>Improve Query Intent for Shopping Queries.</li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Software Engineering Intern, Razorpay</h4>
            <p>Spring 2020</p>
            <ul>
              <li>Worked on engineering tools and performance optimization for Razorpay Payments.</li>
              <li>Collaborated with other interns to build some new performance trackers.</li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Software Engineering Intern, Expedia</h4>
            <p>Summer 2019</p>
            <ul>
              <li>Worked on improving Egencia's (Expedia's B2B arm) travel booking page.</li>
            </ul>
          </div>

        </section>
        <section>
          <h3>Skills</h3>
          <div className="resume-item">
            <ul>
              <li>Proficient in C++, Python, Java and SQL</li>
              <li>Experience with Applied ML. Built some ML models using the trendy LLMs.</li>
              <li>Experience with React, Node.js.</li>
              <li>Strong problem-solving and communication skills</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
