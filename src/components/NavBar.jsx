import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/styles/navBar.css'

export const NavBar = () => {
  return (
    <>
      <div className="container">
        <img src="assets/image/rm.png" className="logo" />
        <nav className="navBar">
          <NavLink to={"/"} className="ancor" activeclassname="active">Home</NavLink>
          <NavLink to={"/characters"} className="ancor">Characters</NavLink>
          <NavLink to={"/gallery"} className="ancor">Gallery</NavLink>
        </nav>
        <div></div>
      </div>
    </>
  );
};
