import { NavLink } from "react-router-dom";

const Navigation = () =>{
    return (
  
    <div style={{position: "sticky", top:"0"}}>
      <nav>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
  
        <ul>
      <NavLink
        id="yoyo"
        to="/"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>
      <NavLink
        id="yoyo"
        to="/location"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Location
      </NavLink>
      <NavLink
        id="yoyo"
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About Us
      </NavLink>
      <NavLink
        id="yoyo"
        to="/store"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Store
      </NavLink>
      <NavLink
        id="yoyo"
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contact Us
      </NavLink>
    </ul>
  
        <button>Login</button>
      </nav>
    </div>
    )
  }

export default Navigation;