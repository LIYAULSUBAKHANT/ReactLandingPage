import React from "react";
import "../style.css"; 

const About = () => {
  return (
    <div className="about-page">
      <section className="about-intro">
        <h1 className="about-title">About Us</h1>
        <p className="about-text">
          We are a passionate team dedicated to delivering the best solutions for our users.
          Our mission is to innovate, inspire, and provide exceptional services that help
          businesses grow and succeed.
        </p>
      </section>

      {/* Our Values Section */}
      <section className="about-values">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-container">
          <div className="value-card">
            <h3 className="value-title">🚀 Innovation</h3>
            <p className="value-text">We embrace creativity and strive for continuous improvement.</p>
          </div>
          <div className="value-card">
            <h3 className="value-title">💡 Excellence</h3>
            <p className="value-text">We set high standards and deliver outstanding results.</p>
          </div>
          <div className="value-card">
            <h3 className="value-title">🤝 Integrity</h3>
            <p className="value-text">We build trust through transparency and honesty.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <h2 className="section-title">Join Our Journey</h2>
        <p className="cta-text">Be a part of our growing community and explore new possibilities with us.</p>
        <button className="primary-button">Learn More</button>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <p className="footer-text">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
