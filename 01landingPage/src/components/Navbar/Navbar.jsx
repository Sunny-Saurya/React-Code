import { Link } from "react-router-dom";

const Navigation = () =>{
    return (
  
    <div>
      <nav>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
  
        <ul>
          <link to = "/" >Home</link>
          <link to = "/Location" >Location</link>
          <link to = "/About" >About Us</link>
          <link to = "/Store" >Store</link>
          <link to = "/Contact"  >Contact Us</link>
        </ul>
  
        <button>Login</button>
      </nav>
    </div>
    )
  }

export default Navigation;