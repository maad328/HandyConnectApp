import React from "react";
import "./styles1/Services.css"; // Import the CSS file

const servicesList = [
  {
    id: 1,
    name: "AC Services",
    icon: "https://cdn.mrmahir.com/services/ac.svg",
  },
  {
    id: 2,
    name: "Plumber",
    icon: "https://cdn.mrmahir.com/services/plumber.svg",
  },
  {
    id: 3,
    name: "Electrician",
    icon: "https://cdn.mrmahir.com/services/electrician.svg",
  },
  {
    id: 4,
    name: "Handyman",
    icon: "https://cdn.mrmahir.com/services/handyman.svg",
  },
  {
    id: 5,
    name: "Carpenter",
    icon: "https://cdn.mrmahir.com/services/carpenter.svg",
  },
  {
    id: 6,
    name: "Painter",
    icon: "https://cdn.mrmahir.com/services/painter.svg",
  },
  {
    id: 7,
    name: "Home Appliances",
    icon: "https://cdn.mrmahir.com/services/appliance-repair.svg",
  },
  {
    id: 8,
    name: "Geyser",
    icon: "https://cdn.mrmahir.com/services/geyser.svg",
  },
  {
    id: 9,
    name: "Pest Control",
    icon: "https://cdn.mrmahir.com/svgs/pest-control.svg",
  },
  {
    id: 10,
    name: "Home Inspection",
    icon: "https://cdn.mrmahir.com/svgs/house_inspection_updated.svg",
  },
];

function Services() {
  return (
    <div className="services-container">
      <h2 className="services-title">Services</h2>
      <p className="services-subtitle">
        Choose from our wide range of services
      </p>
      <div className="services-grid">
        {servicesList.map((service) => (
          <div key={service.id} className="service-card">
            <img
              src={service.icon}
              alt={service.name}
              className="service-icon"
            />
            <div className="service-name">{service.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Services;
