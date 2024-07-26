import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold">About</h4>
            <p className="text-sm">
              I'm Sunny, an aspiring software engineer and frontend web developer. Passionate about web design, development, and content creation.
            </p>
          </div>
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="text-sm">
              <li><a href="/" className="hover:text-red-500">Home</a></li>
              <li><a href="/about" className="hover:text-red-500">About</a></li>
              <li><a href="/projects" className="hover:text-red-500">Projects</a></li>
              <li><a href="/contact" className="hover:text-red-500">Contact</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold">Follow Me</h4>
            <ul className="flex space-x-4 text-sm">
              <li><a href="https://github.com/Sunny-Saurya" className="hover:text-red-500">GitHub</a></li>
              <li><a href="https://twitter.com/YourTwitterHandle" className="hover:text-red-500">Twitter</a></li>
              <li><a href="https://linkedin.com/in/YourLinkedInHandle" className="hover:text-red-500">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Sunny. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
