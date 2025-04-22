import { useState } from "react";
import Image from "next/image";

export default function ServiceBookingPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedDuration, setSelectedDuration] = useState("60");

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="booking-container">
      <div className="booking-grid">
        {/* Left side - Service Provider Image */}
        <div className="image-container">
          <div className="image-wrapper">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Professional Photographer"
              width={600}
              height={600}
              className="provider-image"
            />

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
                  <RadioGroup
                    defaultValue="60"
                    className="duration-options"
                    value={selectedDuration}
                    onValueChange={setSelectedDuration}
                  >
                    <div className="duration-option-wrapper">
                      <RadioGroupItem
                        id="duration-60"
                        value="60"
                        className="sr-only"
                      />
                      <Label
                        htmlFor="duration-60"
                        className={`duration-option ${
                          selectedDuration === "60" ? "duration-selected" : ""
                        }`}
                      >
                        60 min
                      </Label>
                    </div>
                    <div className="duration-option-wrapper">
                      <RadioGroupItem
                        id="duration-90"
                        value="90"
                        className="sr-only"
                      />
                      <Label
                        htmlFor="duration-90"
                        className={`duration-option ${
                          selectedDuration === "90" ? "duration-selected" : ""
                        }`}
                      >
                        90 min
                      </Label>
                    </div>
                    <div className="duration-option-wrapper">
                      <RadioGroupItem
                        id="duration-120"
                        value="120"
                        className="sr-only"
                      />
                      <Label
                        htmlFor="duration-120"
                        className={`duration-option ${
                          selectedDuration === "120" ? "duration-selected" : ""
                        }`}
                      >
                        120 min
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="quantity-selector">
                  <h3 className="option-label">Number of People</h3>
                  <div className="quantity-control">
                    <button
                      onClick={decreaseQuantity}
                      className="quantity-button"
                    >
                      -
                    </button>
                    <div className="quantity-display">{quantity}</div>
                    <button
                      onClick={increaseQuantity}
                      className="quantity-button"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="booking-actions">
                <Button className="book-button">Book Session</Button>
              </div>

              <Separator />

              <div className="provider-description">
                <p>
                  Alex Morgan is a professional photographer with over 10 years
                  of experience specializing in portrait and event photography.
                  With an eye for detail and a passion for capturing authentic
                  moments, Alex delivers high-quality images that tell your
                  unique story.
                </p>
                <p className="description-paragraph">
                  This booking includes a professional photoshoot at your chosen
                  location, expert direction during the session, and
                  professionally edited digital images delivered via an online
                  gallery.
                </p>
              </div>

              <Collapsible className="details-section">
                <CollapsibleTrigger className="details-trigger">
                  <span className="details-title">Service Details</span>
                  <ChevronRight className="details-icon" />
                </CollapsibleTrigger>
                <CollapsibleContent className="details-content">
                  <ul className="service-list">
                    <li>
                      Professional photography session at your location of
                      choice
                    </li>
                    <li>Expert guidance and posing direction</li>
                    <li>Professional editing and color correction</li>
                    <li>High-resolution digital images</li>
                    <li>Online gallery for easy downloading and sharing</li>
                    <li>Usage rights for personal use</li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible className="details-section">
                <CollapsibleTrigger className="details-trigger">
                  <span className="details-title">Booking & Cancellation</span>
                  <ChevronRight className="details-icon" />
                </CollapsibleTrigger>
                <CollapsibleContent className="details-content">
                  <p className="cancellation-policy">
                    A 50% deposit is required to secure your booking. The
                    remaining balance is due on the day of the session.
                    Cancellations made more than 48 hours in advance will
                    receive a full refund of the deposit. Rescheduling is
                    available at no additional cost with at least 24 hours
                    notice.
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
