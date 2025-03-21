import React, { useState, useEffect } from "react";
import "./styles1/Header.css";
import Modal from "./Modal";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="header">
        {/* Logo */}
        <div className="logo-container">
          <img src="/stylish-h-logo.svg" alt="H Logo" className="logo" />
          <span className="company-name">HandyConnect</span>
        </div>

        {/* Navigation Links */}
        <nav className="nav-container">
          <a href="/" className="nav-link active">
            Home
          </a>
          {!isMobile && (
            <>
              <a href="/about" className="nav-link">
                About Us
              </a>
              <a href="/services" className="nav-link">
                Services <span className="dropdown-arrow">▼</span>
              </a>
              <a href="/blog" className="nav-link">
                Blog
              </a>
            </>
          )}
        </nav>

        {/* Sign In Button */}
        <div className="auth-container">
          <button className="signin-button" onClick={() => setShowModal(true)}>
            Sign In / Sign Up
          </button>
        </div>
      </header>

      {/* Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
