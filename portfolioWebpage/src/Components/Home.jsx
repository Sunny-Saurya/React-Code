import React from 'react';
// Make sure to create a CSS file for styling

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Sunny, a Frontend Web Developer</p>
      </section>
      
      <section className="introduction">
        <h2>About Me</h2>
        <p>
          I am currently pursuing a B.Tech in Computer Science and Engineering (CSE).
          My skills include HTML, CSS, JavaScript, and the DOM. I'm passionate about web development
          and have created various projects, including a learning platform and a quiz app.
        </p>
      </section>
      
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>DOM Manipulation</li>
          <li>C++</li>
          <li>Python</li>
          <li>Java</li>
          <li>Data Structures and Algorithms</li>
        </ul>
      </section>
      
      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>Level Up - A learning platform</li>
          <li>Quiz App - A dynamic quiz application</li>
          <li>Bookmark Your Website - A bookmarking tool</li>
          <li>Password Show/Hide Button</li>
          <li>Horizontal Scrolling Layout</li>
          <li>Image Search Engine</li>
          {/* Add more projects as needed */}
        </ul>
      </section>
    </div>
  );
};

export default Home;
