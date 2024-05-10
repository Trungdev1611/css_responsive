import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isTransformed, setIsTransformed] = useState(true);
  const handleClick = () => {
    setIsTransformed(!isTransformed);
  };

  return (
    <div className="navbar-container">
      <div className="nav-left">NavBarReposive</div>

      <div className="nav-right">
        <ul className="list-navbar">
          <li className="list-navbar-item">Home</li>
          <li className="list-navbar-item">Shop</li>
          <li className="list-navbar-item">Blog</li>
          <li className="list-navbar-item">About</li>
          <li className="list-navbar-item">Contact</li>
        </ul>
        <div className="icon_navbar">
          <span onClick={handleClick}>icon</span>
        </div>
    
      </div>
      <ul className={`mobile-nav ${isTransformed ? "transformed" : ""}`}>
          <li className="list-navbar-item">Home</li>
          <li className="list-navbar-item">Shop</li>
          <li className="list-navbar-item">Blog</li>
          <li className="list-navbar-item">About</li>
          <li className="list-navbar-item">Contact</li>
        </ul>
    </div>
  );
};

export default Navbar;
