import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>City College of Bayawan</h3>
            <p>Honor and Excellence for the Highest Good</p>
            <p>Honus et Excellentia Ad Summum Bonum</p>
          </div>
          <div className="footer-section">
            <h4>Contact Information</h4>
            <p>
              <span className="icon">📍</span> Bayawan City, Negros Oriental
            </p>
            <p>
              <span className="icon">📞</span> (035) XXX-XXXX
            </p>
            <p>
              <span className="icon">✉️</span> info@ccb.edu.ph
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="/">
              <span className="icon">🏠</span> Home
            </a>
            <a href="/academics">
              <span className="icon">🎓</span> Academic Programs
            </a>
            <a href="/admissions">
              <span className="icon">📝</span> Admissions
            </a>
            <a href="/news">
              <span className="icon">📰</span> News & Events
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 City College of Bayawan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 