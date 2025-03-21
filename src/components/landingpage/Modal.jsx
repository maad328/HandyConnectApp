import React, { useState } from "react";
import "./styles1/Modal.css";

const Modal = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passowrd, setPassWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { phoneNumber });
    // Handle form submission logic here
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-content">
          <h1 className="modal-title">
            Welcome to Handy
            <br />
            Connect
          </h1>
          <p className="modal-subtitle">Get started!</p>

          <form className="modal-form" onSubmit={handleSubmit}>
            <input
              type="tel"
              className="modal-input"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
              required
            />

            <input
              type="password"
              className="modal-input"
              placeholder="Password"
              value={passowrd}
              onChange={(e) => setPassWord(e.target.value)}
              required
            />
            <button type="submit" className="modal-button">
              Continue
            </button>
          </form>

          <div className="modal-links">
            <p>
              Here you can see <a href="#">Terms & Conditions</a>
            </p>
            <p>
              Visit our <a href="#">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
