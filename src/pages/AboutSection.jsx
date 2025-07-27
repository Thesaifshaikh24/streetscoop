import React from "react";
import "./AboutSection.css";
import { FaUsers, FaBullseye, FaHeart, FaMedal } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="about-container">
      {/* Mission and Vision */}
      <div className="about-mission-vision">
        <div className="card mission-card">
          <h2 className="heading mission">Our Mission</h2>
          <p>
            To empower India’s street food vendors by providing them access to
            a reliable, transparent, and efficient marketplace for sourcing
            quality raw materials at competitive prices, enabling them to grow
            their businesses and serve better food to their communities.
          </p>
        </div>
        <div className="card vision-card">
          <h2 className="heading vision">Our Vision</h2>
          <p>
            To become India’s largest and most trusted marketplace for street
            food vendors, creating a sustainable ecosystem where vendors can
            thrive, suppliers can grow, and customers can enjoy the best street
            food experiences across the country.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <h2 className="values-title">Our Values</h2>
      <div className="values-container">
        <div className="value-card">
          <FaUsers className="icon" />
          <h3>Community First</h3>
          <p>
            We believe in building a strong community of vendors and suppliers
            who support each other’s growth.
          </p>
        </div>
        <div className="value-card">
          <FaBullseye className="icon" />
          <h3>Quality Focused</h3>
          <p>
            Every supplier on our platform is verified for quality, ensuring
            vendors get the best ingredients.
          </p>
        </div>
        <div className="value-card">
          <FaHeart className="icon" />
          <h3>Passion for Food</h3>
          <p>
            We’re passionate about India’s street food culture and helping it
            thrive in the modern economy.
          </p>
        </div>
        <div className="value-card">
          <FaMedal className="icon" />
          <h3>Excellence Driven</h3>
          <p>
            We strive for excellence in every aspect of our service, from
            technology to customer support.
          </p>
        </div>
      </div>
      <br /><br />

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section logo-section">
            <h3 className="footer-logo">
              <span className="dot" /> <span>Street Scoop Connect</span>
            </h3>
            <p>
              Connecting India's street food vendors with trusted suppliers.
              Fresh ingredients, fair prices, seamless business.
            </p>
            <div className="social-icons">
              <i className="fab fa-facebook-f" />
              <i className="fab fa-twitter" />
              <i className="fab fa-instagram" />
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>About Us</li>
              <li>Marketplace</li>
              <li>Pricing</li>
              <li>Success Stories</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>For Business</h4>
            <ul>
              <li>Vendor Registration</li>
              <li>Supplier Registration</li>
              <li>Partnership</li>
              <li>Business Tools</li>
              <li>API Documentation</li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h4>Contact</h4>
            <p>📞 +91 9876543210</p>
            <p>📧 hello@streetscoopconnect.com</p>
            <p>📍 Mumbai, Maharashtra, India</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Street Scoop Connect. All rights reserved.</p>
          <div className="policies">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutSection;
