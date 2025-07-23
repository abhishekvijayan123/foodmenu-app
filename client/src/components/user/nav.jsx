import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-area">
        <img src="src/assets/logo.png" alt="Logo" />
       
      </div>
      <nav className="nav-links">
        <a href="#home">HOME</a>
        <a href="#menu">MENU</a>
        <a href="#reservation">MAKE A RESERVATION</a>
        <a href="#contact">CONTACT US</a>
      </nav>
    </header>
  );
}
