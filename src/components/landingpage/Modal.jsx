import React, { useState } from "react";
import "./styles1/Modal.css";

const Modal = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isForgotPassword) {
      console.log("Password reset request for:", phoneNumber);
      // Handle forgot password logic here (e.g., send reset link)
    } else if (isSignUp) {
      console.log("Creating account with:", { phoneNumber });
      // Handle account creation logic here
    } else {
      console.log("Login attempt with:", { phoneNumber });
      // Handle login logic here
    }
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

          <p className="modal-subtitle">
            {isForgotPassword
              ? "Reset your password"
              : isSignUp
              ? "Create an account!"
              : "Get started!"}
          </p>

          <form className="modal-form" onSubmit={handleSubmit}>
            {isForgotPassword ? (
              <>
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
                <button type="submit" className="modal-button">
                  Send Reset Link
                </button>
              </>
            ) : (
              <>
                {isSignUp && (
                  <>
                    <input
                      type="text"
                      className="modal-input"
                      placeholder="Name"
                      required
                    />
                  </>
                )}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit" className="modal-button">
                  {isSignUp ? "Sign Up" : "Sign In"}
                </button>
              </>
            )}
          </form>

          {!isForgotPassword && (
            <p className="toggle-text">
              <span
                className="toggle-link"
                onClick={() => setIsForgotPassword(true)}
              >
                Forgot Password?
              </span>
            </p>
          )}

          {!isForgotPassword && (
            <p className="toggle-text">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <span
                className="toggle-link"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Sign in" : "Create account"}
              </span>
            </p>
          )}

          {isForgotPassword && (
            <p className="toggle-text">
              Remember your password?{" "}
              <span
                className="toggle-link"
                onClick={() => setIsForgotPassword(false)}
              >
                Back to Sign in
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
