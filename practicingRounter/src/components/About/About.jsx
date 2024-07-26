import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100 py-10 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-lg text-gray-600 mb-8">
          Hi, I'm Sunny! I'm an aspiring software engineer majoring in Computer Science and Engineering (CSE). 
          I'm a frontend web developer with a passion for creating beautiful and functional web experiences. 
          I have experience with HTML, CSS, JavaScript, React, and various other web technologies.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          I enjoy learning new skills and continuously improving my craft. When I'm not coding, you can find me 
          exploring the world of self-development, creating content, or reading books on personal growth.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          My goal is to become a well-rounded software engineer who can contribute to meaningful projects and make a 
          positive impact through technology.
        </p>
        <a 
          href="/contact" 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default About;
