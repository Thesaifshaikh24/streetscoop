import React, { useState, useEffect } from "react";
import "./VendorRegistration.css";
import { useNavigate } from "react-router-dom";

const VendorRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
  });

  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("vendorData");
    if (savedData) {
      setIsRegistered(true);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    for (let key in formData) {
      if (formData[key].trim() === "") {
        alert("Please fill all fields clearly.");
        return;
      }
    }

    // Check for duplicate email
    const existingData = JSON.parse(localStorage.getItem("vendorData"));
    if (existingData && existingData.email === formData.email) {
      alert("This email is already registered.");
      return;
    }

    // Save to localStorage
    localStorage.setItem("vendorData", JSON.stringify(formData));
    alert("Registered successfully!");
    navigate("/marketplace");
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure?");
    if (confirmLogout) {
      localStorage.removeItem("vendorData");
      setIsRegistered(false);
      setFormData({
        businessName: "",
        ownerName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
      });
    }
  };

  return (
    <div className="vendor-form-container">
      {isRegistered ? (
        <div className="already-registered">
          <h2>You are already registered. continue your shopping</h2><br />
          <button onClick={handleLogout} className="submit-btn">Logout</button>
        </div>
      ) : (
        <form className="vendor-form" onSubmit={handleSubmit}>
          <h2>Vendor Registration</h2>
          <p>Join thousands of street food vendors already growing their business with us</p>

          <div className="form-row">
            <div className="form-group">
              <label>Business Name *</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="e.g., Mumbai Street Delights"
                required
              />
            </div>

            <div className="form-group">
              <label>Owner Name *</label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Business Address *</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Street address where your business operates"
              required
            ></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Mumbai"
                required
              />
            </div>

            <div className="form-group">
              <label>State *</label>
              <select name="state" value={formData.state} onChange={handleChange} required>
                <option value="">Select state</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Delhi">Delhi</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="submit-btn-container">
            <button type="submit" className="submit-btn">Submit Registration</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default VendorRegistration;
