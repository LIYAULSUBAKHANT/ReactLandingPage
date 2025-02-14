import React from 'react';
import '../style.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Welcome to Our Platform</h1>
        <p className="hero-text">Empowering businesses with innovative solutions and cutting-edge technology.</p>
        <button className="primary-button">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-container">
          <div className="feature-card">
            <h3 className="feature-title">🚀 Fast & Reliable</h3>
            <p className="feature-text">Experience lightning-fast performance with our optimized solutions.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">🔒 Secure & Trusted</h3>
            <p className="feature-text">Your data is safe with our top-notch security protocols.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">📞 24/7 Support</h3>
            <p className="feature-text">We are always here to assist you with any queries.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2 className="section-title">Join Us Today!</h2>
        <p className="cta-text">Take your business to the next level with our powerful tools and services.</p>
        <button className="primary-button">Sign Up Now</button>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <p className="footer-text">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
