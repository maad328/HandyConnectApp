"use client";

import { useState } from "react";
import "./service-booking-page.css";

export default function ServiceBookingPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedDuration, setSelectedDuration] = useState("60");
  const [serviceDetailsOpen, setServiceDetailsOpen] = useState(false);
  const [bookingDetailsOpen, setBookingDetailsOpen] = useState(false);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
  };

  const toggleServiceDetails = () => {
    setServiceDetailsOpen(!serviceDetailsOpen);
  };

  const toggleBookingDetails = () => {
    setBookingDetailsOpen(!bookingDetailsOpen);
  };

  return (
    <div className="booking-container">
      <div className="booking-grid">
        {/* Left side - Service Provider Image */}
        <div className="image-container">
          <div className="image-wrapper">
            <img
              src="https://img.freepik.com/premium-photo/portrait-af-engineer-using-tablet-facility_53419-10213.jpg?ga=GA1.1.1235359899.1744533688&semt=ais_hybrid&w=740"
              alt="Professional Photographer"
              className="provider-image"
            />
          </div>
        </div>

        {/* Right side - Booking Information */}
        <div className="booking-info">
          <div className="provider-header">
            <h1 className="provider-name">
              Alex Morgan - Professional Photographer
            </h1>
            <div className="price-container">
              <span className="price-amount">$120.00</span>
              <span className="price-unit">per hour</span>
            </div>
            <p className="delivery-info">
              Book now and receive your edited photos within 7 days
            </p>
          </div>

          <div className="booking-options">
            <div className="duration-selector">
              <h3 className="option-label">Select Session Duration</h3>
              <div className="duration-options">
                <div className="duration-option-wrapper">
                  <input
                    type="radio"
                    id="duration-60"
                    name="duration"
                    value="60"
                    checked={selectedDuration === "60"}
                    onChange={() => handleDurationChange("60")}
                    className="duration-radio"
                  />
                  <label
                    htmlFor="duration-60"
                    className={`duration-option ${
                      selectedDuration === "60" ? "duration-selected" : ""
                    }`}
                  >
                    60 min
                  </label>
                </div>
                <div className="duration-option-wrapper">
                  <input
                    type="radio"
                    id="duration-90"
                    name="duration"
                    value="90"
                    checked={selectedDuration === "90"}
                    onChange={() => handleDurationChange("90")}
                    className="duration-radio"
                  />
                  <label
                    htmlFor="duration-90"
                    className={`duration-option ${
                      selectedDuration === "90" ? "duration-selected" : ""
                    }`}
                  >
                    90 min
                  </label>
                </div>
                <div className="duration-option-wrapper">
                  <input
                    type="radio"
                    id="duration-120"
                    name="duration"
                    value="120"
                    checked={selectedDuration === "120"}
                    onChange={() => handleDurationChange("120")}
                    className="duration-radio"
                  />
                  <label
                    htmlFor="duration-120"
                    className={`duration-option ${
                      selectedDuration === "120" ? "duration-selected" : ""
                    }`}
                  >
                    120 min
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="booking-actions">
            <button className="book-button">Book Session</button>
          </div>

          <div className="separator"></div>

          <div className="provider-description">
            <p>
              Alex Morgan is a professional photographer with over 10 years of
              experience specializing in portrait and event photography. With an
              eye for detail and a passion for capturing authentic moments, Alex
              delivers high-quality images that tell your unique story.
            </p>
            <p className="description-paragraph">
              This booking includes a professional photoshoot at your chosen
              location, expert direction during the session, and professionally
              edited digital images delivered via an online gallery.
            </p>
          </div>

          <div className="details-section">
            <button
              className="details-trigger"
              onClick={toggleServiceDetails}
              aria-expanded={serviceDetailsOpen}
            >
              <span className="details-title">Service Details</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`details-icon ${
                  serviceDetailsOpen ? "icon-rotated" : ""
                }`}
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
            {serviceDetailsOpen && (
              <div className="details-content">
                <ul className="service-list">
                  <li>
                    Professional photography session at your location of choice
                  </li>
                  <li>Expert guidance and posing direction</li>
                  <li>Professional editing and color correction</li>
                  <li>High-resolution digital images</li>
                  <li>Online gallery for easy downloading and sharing</li>
                  <li>Usage rights for personal use</li>
                </ul>
              </div>
            )}
          </div>

          <div className="details-section">
            <button
              className="details-trigger"
              onClick={toggleBookingDetails}
              aria-expanded={bookingDetailsOpen}
            >
              <span className="details-title">Booking & Cancellation</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`details-icon ${
                  bookingDetailsOpen ? "icon-rotated" : ""
                }`}
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
            {bookingDetailsOpen && (
              <div className="details-content">
                <p className="cancellation-policy">
                  A 50% deposit is required to secure your booking. The
                  remaining balance is due on the day of the session.
                  Cancellations made more than 48 hours in advance will receive
                  a full refund of the deposit. Rescheduling is available at no
                  additional cost with at least 24 hours notice.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
