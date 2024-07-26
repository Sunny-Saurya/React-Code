import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ toggleTheme }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Chit Chat</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "text-red-500" : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "text-red-500" : "text-white"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/skills" 
              className={({ isActive }) => 
                isActive ? "text-red-500" : "text-white"
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                isActive ? "text-red-500" : "text-white"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? "text-red-500" : "text-white"
              }
            >
              Contact
            </NavLink>
          </li>
          {/* <button className="btn" onClick={toggleTheme}>Dark</button> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
