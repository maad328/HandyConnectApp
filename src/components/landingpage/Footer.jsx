import React from "react";
import "./styles1/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/stylish-h-logo.svg" alt="HandyConnect Logo" />
            <span>HandyConnect</span>
          </div>
          <p className="footer-description">
            Your trusted partner for all home services. We provide professional
            and reliable services at your doorstep.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="/services/ac">AC Service</a>
            </li>
            <li>
              <a href="/services/plumbing">Plumbing</a>
            </li>
            <li>
              <a href="/services/electrical">Electrical</a>
            </li>
            <li>
              <a href="/services/carpentry">Carpentry</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>
              <i className="fas fa-phone"></i>
              <span>+1 234 567 890</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>info@handyconnect.com</span>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Street, City, Country</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-links">
          <a href="#" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} HandyConnect. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
