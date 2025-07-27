import React from 'react';
import './Home.css';
import {
  FaUsers, FaBox, FaChartLine, FaShieldAlt, FaDollarSign,
  FaTruck, FaClock, FaStar, FaUserPlus, FaSearch, FaShoppingCart, 
} from 'react-icons/fa';
import { MdGroups, MdTrendingUp } from "react-icons/md";
import { BsBoxSeam, BsGraphUp } from "react-icons/bs"

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero">
      <div className="hero-content">
        <h1><span>Connect Street Food</span><br /><span className="highlight">Vendors & Suppliers</span></h1>
        <p>India's first marketplace connecting street food vendors with trusted, affordable raw material suppliers. Fresh ingredients, fair prices, seamless business.</p>
        <div className="hero-buttons">
          <a href="/login"><button className="vendor-btn">I'm a Vendor →</button></a>
          <a href="/login"><button className="supplier-btn">I'm a Supplier →</button></a>
        </div>
        <div className="stats">
          <div><span><MdGroups size={60} /></span><p><strong>500+</strong><br />Active Vendors</p></div>
          <div><span>< BsBoxSeam size={60}/></span><p><strong>200+</strong><br />Trusted Suppliers</p></div>
          <div><span>< MdTrendingUp size={60}/></span><p><strong>₹1Cr+</strong><br />Business Generated</p></div>
        </div>
      </div>
    </div>

      {/* Why Choose Section */}
      <section className="why-choose">
        <h2>Why Choose Street Scoop Connect?</h2>
        <p className="subtitle">
          We understand the challenges of running a street food business. Our platform is designed to solve your biggest pain points.
        </p>
        <div className="feature-grid">
          {/* Each feature card */}
          <div className="feature-card"><div className="icon-wrapper"><FaShieldAlt size={32} color="#4CAF50" /></div><h3>Verified Suppliers</h3><p>All suppliers are background-checked and quality-verified to ensure you get the best raw materials for your street food business.</p></div>
          <div className="feature-card"><div className="icon-wrapper"><FaDollarSign size={32} color="#FF9800" /></div><h3>Best Prices</h3><p>Competitive pricing with bulk purchase options. Save up to 30% on your raw material costs compared to traditional suppliers.</p></div>
          <div className="feature-card"><div className="icon-wrapper"><FaTruck size={32} color="#FFC107" /></div><h3>Quick Delivery</h3><p>Fast and reliable delivery network ensuring fresh ingredients reach you on time, every time. Same-day delivery available.</p></div>
          <div className="feature-card"><div className="icon-wrapper"><FaClock size={32} color="#4CAF50" /></div><h3>24/7 Support</h3><p>Round-the-clock customer support to help you with orders, payments, and any issues. We're here when you need us.</p></div>
          <div className="feature-card"><div className="icon-wrapper"><FaUsers size={32} color="#FF5722" /></div><h3>Community Network</h3><p>Join a growing community of street food vendors sharing tips, recipes, and business insights to grow together.</p></div>
          <div className="feature-card"><div className="icon-wrapper"><FaStar size={32} color="#FFC107" /></div><h3>Quality Guarantee</h3><p>100% quality guarantee on all products. Not satisfied? Full refund within 24 hours. Your success is our priority.</p></div>
        </div>
      </section>

      {/* How It Works - Vendors */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <p className="subtitle">Simple steps to connect and start doing business</p>
        <h3 className="for-vendors orange">For Street Food Vendors</h3>
        <p className="subtitle">Start sourcing quality ingredients at better prices</p>
        <div className="steps">
          <div className="step-card"><div className="step-icon orange"><FaUserPlus /><span className="badge">1</span></div><h4>Sign Up</h4><p>Create your vendor account in minutes. Verify your business and start exploring.</p></div>
          <div className="step-card"><div className="step-icon orange"><FaSearch /><span className="badge">2</span></div><h4>Browse Products</h4><p>Search through thousands of quality raw materials from verified suppliers.</p></div>
          <div className="step-card"><div className="step-icon orange"><FaShoppingCart /><span className="badge">3</span></div><h4>Place Orders</h4><p>Add items to cart, compare prices, and place orders with just a few clicks.</p></div>
          <div className="step-card"><div className="step-icon orange"><FaTruck /><span className="badge">4</span></div><h4>Fast Delivery</h4><p>Get your fresh ingredients delivered to your location quickly and safely.</p></div>
        </div>
        <a href="/login"><button className="vendor-start-btn">Start as Vendor</button></a>
      </section>

      {/* How It Works - Suppliers */}
      <section className="how-it-works">
        <h3 className="for-vendors green">For Raw Material Suppliers</h3>
        <p className="subtitle">Reach thousands of vendors and grow your business</p>
        <div className="steps">
          <div className="step-card"><div className="step-icon green"><FaUserPlus /><span className="badge orange-badge">1</span></div><h4>Register Business</h4><p>Register as a supplier, verify your business credentials and quality standards.</p></div>
          <div className="step-card"><div className="step-icon green"><FaSearch /><span className="badge orange-badge">2</span></div><h4>List Products</h4><p>Add your products with competitive prices, descriptions, and quality certificates.</p></div>
          <div className="step-card"><div className="step-icon green"><FaShoppingCart /><span className="badge orange-badge">3</span></div><h4>Receive Orders</h4><p>Get notified of new orders, manage inventory, and accept orders efficiently.</p></div>
          <div className="step-card"><div className="step-icon green"><FaTruck /><span className="badge orange-badge">4</span></div><h4>Fulfill & Deliver</h4><p>Pack and deliver orders on time to build trust and grow your customer base.</p></div>
        </div>
        <a href="/loign"><button className="supplier-start-btn">Start as Supplier</button></a>
      </section>

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

    </>
  );
};

export default Home;