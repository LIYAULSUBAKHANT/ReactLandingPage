import React from "react";
import "../style.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-text">Have questions? We’re here to help!</p>
      </section>

      <section className="contact-form">
        <form>
          <input type="text" className="input-field" placeholder="Your Name" />
          <input type="email" className="input-field" placeholder="Your Email" />
          <textarea className="input-field textarea" placeholder="Your Message"></textarea>
          <button className="submit-button">Send Message</button>
        </form>
      </section>

      <section className="contact-info">
        <h2 className="info-title">Our Contact Details</h2>
        <p className="info-text">📍 BIT,SATHYAMANGALAM,TAMILNADU</p>
        <p className="info-text">📞 9547845124</p>
        <p className="info-text">✉️ bitsathy@gmail.com</p>
      </section>

      <footer className="contact-footer">
        <p className="footer-text">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
