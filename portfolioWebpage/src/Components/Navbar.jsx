import React from 'react';
import {Link, NavLink } from 'react-router-dom';


const Navbar = ({ toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Sunny's Portfolio</Link>
      </div>
      <ul className="navbar-links">
      <NavLink className = {(e) =>{return e.isActive? "red" : ""}} to={'/'} href="/"><li>Home</li></NavLink>
      <NavLink className = {(e) =>{return e.isActive? "red" : ""}} to={'/'} href="/"><li>About</li></NavLink>
      <NavLink className = {(e) =>{return e.isActive? "red" : ""}} to={'/'} href="/"><li>Skills</li></NavLink>
      <NavLink className = {(e) =>{return e.isActive? "red" : ""}} to={'/'} href="/"><li>Project</li></NavLink>
      <NavLink className = {(e) =>{return e.isActive? "red" : ""}} to={'/'} href="/"><li>Contact</li></NavLink>
        {/* <button className="btn" onClick={toggleTheme}>Dark</button> */}
      </ul>
    </nav>
  );
};

export default Navbar;
