import React, { useState, useEffect } from "react";
import "./SupplierRegistration.css";
import { useNavigate } from "react-router-dom";

const SupplierRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: ""
  });

  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const storedSupplier = localStorage.getItem("supplierRegistered");
    if (storedSupplier) {
      setIsRegistered(true);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingSupplier = localStorage.getItem("supplierRegistered");

    if (existingSupplier && JSON.parse(existingSupplier).email === formData.email) {
      alert("You are already registered with this email.");
      return;
    }

    localStorage.setItem("supplierRegistered", JSON.stringify(formData));
    alert("Registered successfully, sign in as a supplier yourself");
    navigate("/supplier-dashboard");
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("supplierRegistered");
      setIsRegistered(false);
    }
  };

  if (isRegistered) {
    const supplier = JSON.parse(localStorage.getItem("supplierRegistered"));
    return (
      <div className="vendor-form-container">
        <form className="vendor-form">
          <h2>You are already registered, go and signup with (I'm a supplier)</h2>
          <p style={{ marginBottom: "30px" }}>
            Registered email: <strong>{supplier.email}</strong>
          </p>
          <div className="submit-btn-container" style={{ textAlign: "center" }}>
            <button type="button" className="submit-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="vendor-form-container">
      <form className="vendor-form" onSubmit={handleSubmit}>
        <h2>Supplier Registration</h2>
        <p>Join our network of trusted suppliers and reach thousands of street food vendors</p>

        <div className="form-row">
          <div className="form-group">
            <label>Brand Name *</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="e.g., Fresh spice suppliers Pvt Ltd"
              required
            />
          </div>

          <div className="form-group">
            <label>Contact Person *</label>
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
            <label>Business Email *</label>
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
            placeholder="Your business address"
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
    </div>
  );
};

export default SupplierRegistration;
