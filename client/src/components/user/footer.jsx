import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-container">
        <div className="footer-box">
          <h4>CONNECT WITH US</h4>
          <p>📞 +91 1231231231</p>
          <p>✉️ info@deepnetsoft.com</p>
        </div>
        <div className="footer-box logo-box">
          <img src="/src/assets/logo.png" alt="Logo" />
          <p>DEEP NET SOFT</p>
        </div>
        <div className="footer-box">
          <h4>FIND US</h4>
          <p>First floor, Geo Infopark, Infopark EXPY, Kakkanad</p>
        </div>
      </div>
    </footer>
  );
}
