import React, { useState } from "react";
import "./Navbar.css";
import useResize from "../../hooks/useResize";
const Navbar = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
    const [menu, setMenu] = useState("home")
  const [isShowDrop, setIsShowDrop] = useState(false)
  const { width } = useResize(); // Lấy kích thước màn hình
  function handleMenu() {
    setIsShowMenu((prev) => !prev);
  }
  function handleDrop() {
    setIsShowDrop((prev) => !prev);
    setMenu("more")
  }
  function handleActiveMenu(menu: string) {
    setMenu(menu)
  }
  return (
    <div>
      <div className="container">
        <div className="nav-left">
          <ul className={`navbar-menu ${isShowMenu ? "active-menu" : ""}`}>
            <li onClick = {() => handleActiveMenu("home")} className={`menu-item ${menu === "home" ? "active": ""}`}><a href="#">Home</a></li>
            <li onClick = {() => handleActiveMenu("Band")} className={`menu-item ${menu === "Band" ? "active": ""}`}><a href="#">Band</a></li>
            <li onClick = {() => handleActiveMenu("Tour")} className={`menu-item ${menu === "Tour" ? "active": ""}`}><a href="#">Tour</a></li>
            <li onClick = {() => handleActiveMenu("Contact")} className={`menu-item ${menu === "Contact" ? "active": ""}`}><a href="#">Contact</a></li>
            <li onClick = {() => handleActiveMenu("MER")} className="hide-mobile">MER</li>
            <li  className={`menu-item menu-dropdown ${menu === "more" ? "active": ""}`}   onClick={handleDrop}>
              <span><a href="#">More</a></span>
              <span>
                <i className="fa-solid fa-caret-down"></i>
              </span>
              <ul 
              className={`dropdown-content ${isShowDrop ? "showdrop": ""}`}>
                <li>Mercharndise</li>
                <li>Extra</li>
                <li>Media</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
        <i className={`fa-solid ${width < 640 ? 'fa-bars' : 'fa-times'}`} onClick={handleMenu}></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
