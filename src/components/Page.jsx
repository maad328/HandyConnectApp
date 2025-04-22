import React from "react";
import Header from "./landingpage/Header";
import { useState } from "react";
import "./Page.css";
import Footer from "./landingpage/Footer";
import plumberImage from "../assets/plumber-with-his-arms-crossed.jpg";

const employees = [
  {
    id: 1,
    name: "Terry Cobb",
    location: "New York, USA",
    profileViews: 11253,
    followers: 1093,
    projectsDone: 12,
    rating: 4.5,
    image:
      "https://img.freepik.com/premium-photo/portrait-af-engineer-using-tablet-facility_53419-10213.jpg?ga=GA1.1.1235359899.1744533688&semt=ais_hybrid&w=740",
  },
  {
    id: 2,
    name: "Sally Cooper",
    location: "Toronto, Canada",
    profileViews: 135923,
    followers: 23032,
    projectsDone: 25,
    rating: 4.9,
    image:
      "https://img.freepik.com/premium-photo/plumber-smiling-camera_13339-95863.jpg?w=740",
  },
  {
    id: 3,
    name: "Eugenia Alvarez",
    location: "California, USA",
    profileViews: 451245,
    followers: 55345,
    projectsDone: 3,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&h=1000",
  },
  {
    id: 4,
    name: "Malin Quist",
    location: "Toronto, Canada",
    profileViews: 2323,
    followers: 12,
    projectsDone: 2,
    rating: 3.0,
    image:
      "https://img.freepik.com/free-photo/smiling-auto-mechanic-with-wrench-standing-hands-folded-white-background_662251-2939.jpg?t=st=1744550326~exp=1744553926~hmac=fd35ab7a02d426aa1687ddce26ea378ef39b41408cee99962d8e44114f6c6302&w=996",
  },
  {
    id: 5,
    name: "John Martinez",
    location: "Miami, USA",
    profileViews: 8842,
    followers: 892,
    projectsDone: 15,
    rating: 4.7,
    image:
      "https://img.freepik.com/free-photo/plumber-with-his-arms-crossed_1368-515.jpg?ga=GA1.1.1235359899.1744533688&semt=ais_hybrid&w=740",
  },
  {
    id: 6,
    name: "Emma Wilson",
    location: "London, UK",
    profileViews: 15678,
    followers: 2341,
    projectsDone: 18,
    rating: 4.8,
    image:
      "https://img.freepik.com/free-photo/delivery-concept-handsome-african-american-delivery-man-crossed-arms-isolated-grey-studio-background-copy-space_1258-1277.jpg?ga=GA1.1.1235359899.1744533688&semt=ais_hybrid&w=740",
  },
  {
    id: 7,
    name: "Marcus Chen",
    location: "Singapore",
    profileViews: 9234,
    followers: 1567,
    projectsDone: 9,
    rating: 4.6,
    image:
      "https://img.freepik.com/premium-photo/happy-indian-worker-builder-with-crossed-arms_380164-252196.jpg?ga=GA1.1.1235359899.1744533688&semt=ais_hybrid&w=740",
  },
  {
    id: 8,
    name: "Sofia Patel",
    location: "Dubai, UAE",
    profileViews: 12445,
    followers: 1893,
    projectsDone: 14,
    rating: 4.9,
    image:
      "https://img.freepik.com/free-photo/portrait-young-worker-hard-hat-large-metalworking-plant_146671-19573.jpg?ga=GA1.1.1235359899.1744533688&semt=ais_hybrid&w=740",
  },
];
export default function Page() {
  const [viewMode, setViewMode] = useState("grid");
  //function to render Stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <span key={i} className="star filled">
            ★
          </span>
        );
      } else if (i - 0.5 <= rating) {
        stars.push(
          <span key={i} className="star half-filled">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="star">
            ☆
          </span>
        );
      }
    }
    return stars;
  };
  return (
    <>
      <Header />
      <div className="employee-directory">
        <div className="directory-header">
          <div className="team-heading-container">
            <h1 className="team-heading">
              We bring a wealth of <span className="highlight">experience</span>
              <br />
              from a wide range of backgrounds
            </h1>
            <p className="team-subheading">
              Our philosophy is simple; hire great people and give them the
              resources and support to do their best work.
            </p>
          </div>

          <div className="controls"></div>
        </div>

        <div className={`employee-grid ${viewMode}`}>
          {employees.map((employee) => (
            <div key={employee.id} className="employee-card">
              <div className="image-container profile-photo-wrapper">
                <img
                  src={employee.image || plumberImage}
                  alt={employee.name}
                  className="employee-image profile-photo"
                />
                <div className="star-badge quality-badge">⭐</div>
              </div>

              <div className="employee-details">
                <h3 className="employee-name">{employee.name}</h3>
                <p className="employee-location">{employee.location}</p>

                <div className="stats">
                  <div className="stat-row">
                    <span className="stat-label">Profile Views</span>
                    <span className="stat-value">
                      {employee.profileViews.toLocaleString()}
                    </span>
                  </div>

                  <div className="stat-row">
                    <span className="stat-label">Followers</span>
                    <span className="stat-value">
                      {employee.followers.toLocaleString()}
                    </span>
                  </div>

                  <div className="stat-row">
                    <span className="stat-label">Projects Done</span>
                    <span className="stat-value">
                      {employee.projectsDone} Projects
                    </span>
                  </div>

                  <div className="stat-row">
                    <span className="stat-label">Rating</span>
                    <div className="rating">
                      {renderStars(employee.rating)}
                      <span className="rating-text">
                        ({employee.rating} of 5)
                      </span>
                    </div>
                  </div>
                </div>

                <button className="message-button">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
