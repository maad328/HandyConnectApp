import React from "react";
import "./Aboutus.css";
import Header from "./landingpage/Header";

function AboutUsPage() {
  // Company stats
  const companyStats = [
    { number: "15+", label: "Years Experience" },
    { number: "200+", label: "Clients Worldwide" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "45+", label: "Industry Awards" },
  ];

  // Core values
  const coreValues = [
    {
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, pushing boundaries and exceeding expectations.",
      icon: "🏆",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and collaboration to achieve extraordinary results.",
      icon: "🤝",
    },
    {
      title: "Innovation",
      description:
        "We embrace innovation and creative thinking to solve complex challenges.",
      icon: "💡",
    },
    {
      title: "Integrity",
      description:
        "We conduct our business with the highest level of integrity and ethical standards.",
      icon: "⭐",
    },
  ];

  // Team members data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      image:
        "https://img.freepik.com/free-photo/confident-businesswoman-posing-with-arms-crossed_1262-20950.jpg?w=740",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "mailto:sarah@handyconnect.com",
      },
    },
    {
      name: "Michael Chen",
      position: "Operations Director",
      image:
        "https://img.freepik.com/free-photo/young-confident-businessman-suit-standing-with-arms-crossed_171337-18990.jpg?w=740",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "mailto:michael@handyconnect.com",
      },
    },
    {
      name: "Emily Rodriguez",
      position: "Customer Success Manager",
      image:
        "https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?w=740",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "mailto:emily@handyconnect.com",
      },
    },
    {
      name: "David Kim",
      position: "Technical Lead",
      image:
        "https://img.freepik.com/free-photo/handsome-businessman-suit-glasses-cross-arms-chest-look_176420-21750.jpg?w=740",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "mailto:david@handyconnect.com",
      },
    },
    {
      name: "Lisa Thompson",
      position: "Marketing Director",
      image:
        "https://img.freepik.com/free-photo/portrait-young-businesswoman-wearing-office-clothes_273609-7793.jpg?w=740",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "mailto:lisa@handyconnect.com",
      },
    },
    {
      name: "James Wilson",
      position: "Product Manager",
      image:
        "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-blue-wall-self-confident-man-freelancer_273609-16320.jpg?w=740",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "mailto:james@handyconnect.com",
      },
    },
  ];

  return (
    <>
      <Header />
      <div className="about-us-page">
        {/* Hero Section */}
        <section className="hero-section">
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
        </section>

        {/* Our Story Section */}
        <section className="our-story-section">
          <div className="container">
            <div className="section-grid">
              <div className="content-column">
                <h2 className="section-title">Our Story</h2>
                <p className="section-text">
                  Founded in 2008, our company began with a simple mission: to
                  bring together exceptional talent from diverse backgrounds to
                  deliver outstanding results for our clients.
                </p>
                <p className="section-text">
                  What started as a small team of five passionate professionals
                  has grown into a global network of experts, each bringing
                  unique perspectives and specialized knowledge to the table.
                </p>
                <p className="section-text">
                  Throughout our journey, we've remained committed to our
                  founding principles of excellence, innovation, and client
                  satisfaction. We believe that our diverse backgrounds and
                  experiences are our greatest strength, allowing us to approach
                  challenges from multiple angles and develop truly innovative
                  solutions.
                </p>
              </div>
              <div className="image-column">
                <div className="image-container">
                  <img
                    src="/stylish-h-logo.svg"
                    alt="Our team collaborating"
                    className="about-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {companyStats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="core-values-section">
          <div className="container">
            <h2 className="section-title centered">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>

            <div className="values-grid">
              {coreValues.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="container">
            <h2 className="section-title centered">Meet Our Team</h2>
            <p className="section-subtitle">
              The talented people behind our success
            </p>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-member-card">
                  <div className="team-member-image-container">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-member-image"
                    />
                  </div>
                  <div className="team-member-info">
                    <h3 className="team-member-name">{member.name}</h3>
                    <p className="team-member-position">{member.position}</p>
                    <div className="team-member-social">
                      <a
                        href={member.social.linkedin}
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a
                        href={member.social.twitter}
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href={member.social.email} className="social-link">
                        <i className="fas fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to work with us?</h2>
              <p className="cta-text">
                Let's discuss how our team can help you achieve your goals.
              </p>
              <button className="cta-button">Get in Touch</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutUsPage;
