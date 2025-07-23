import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section id="home" className="hero">
      <img src="src/assets/banner.png" alt="Banner" className="hero-bg" />
      <div className="hero-content">
        <h1>MENU</h1>
        <p>
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to place an order, use the “Order Online” button below.
        </p>
        <div className="tabs">
          <Link to="/food">
            <button>FOOD</button>
          </Link>
          <Link to="/">
            <button className="active">DRINKS</button>
          </Link>
          <Link to="/brunch">
            <button>BRUNCH</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
