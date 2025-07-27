import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { productsData } from "./data";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../App";
import "./MarketPlace.css";

function MarketPlace() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  const [search, setSearch] = useState("");
  const [showCart, setShowCart] = useState(false);
  const cartRef = useRef(null);

  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    };

    if (showCart) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCart]);

  const handleAddToCart = (product) => {
    if (!currentUser) {
      alert("Please log in to add items to cart.");
      navigate("/login");
      return;
    }
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove));
  };

  const handleBuyNow = () => {
    const allFilled = Object.values(deliveryDetails).every((val) => val.trim() !== "");
    if (!allFilled) {
      alert("Please fill all delivery fields before proceeding.");
      return;
    }

    if (!cart.length) return alert("Cart is empty!");

    const options = {
      key: "rzp_test_1234567890",
      amount: cart.reduce((acc, item) => acc + item.price, 0) * 100,
      currency: "INR",
      name: "BazaarSetu",
      description: "Thank you for shopping",
      image: "https://yourlogo.com/logo.png",
      handler: function (response) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        setCart([]);
        localStorage.removeItem("cart");
        setDeliveryDetails({ name: "", phone: "", address: "", city: "", pincode: "" });
      },
      prefill: {
        name: deliveryDetails.name,
        email: "test@example.com",
        contact: deliveryDetails.phone
      },
      theme: {
        color: "#3399cc"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleDeliveryChange = (e) => {
    setDeliveryDetails({ ...deliveryDetails, [e.target.name]: e.target.value });
  };

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="marketplace">
      <nav className="navbar2">
        <h2>Marketplace</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div
          className="cart-icon"
          onClick={() => {
            if (!currentUser) {
              alert("Please log in to view your cart.");
              navigate("/login");
              return;
            }
            setShowCart(!showCart);
          }}
        >
          <FaShoppingCart size={30} />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </div>
      </nav>

      {showCart && (
        <div className="cart-section" ref={cartRef}>
          <h3>Your Cart</h3>
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    <img src={item.icon} alt={item.name} />
                    <span>{item.name}</span> - ₹{item.price}
                    <button onClick={() => handleRemoveFromCart(index)}>❌</button>
                  </li>
                ))}
              </ul>
              <p className="total-price">Total: ₹{totalPrice}</p>

              <div className="delivery-form">
                <h4>Delivery Details</h4>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={deliveryDetails.name}
                  onChange={handleDeliveryChange}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={deliveryDetails.phone}
                  onChange={handleDeliveryChange}
                />
                <textarea
                  name="address"
                  placeholder="Full Address"
                  value={deliveryDetails.address}
                  onChange={handleDeliveryChange}
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={deliveryDetails.city}
                  onChange={handleDeliveryChange}
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={deliveryDetails.pincode}
                  onChange={handleDeliveryChange}
                />
              </div>

              <button className="buy-button" onClick={handleBuyNow}>Buy Now</button>
            </>
          )}
        </div>
      )}

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.icon} alt={product.name} /><br /><br />
            <h3>{product.name}</h3>
            <p className="supplier">By {product.supplier}</p>
            <p className="rating">⭐ {product.rating} ({product.reviews} reviews)</p>
            <p className="price">
              ₹{product.price}{"/kg"}
              <span className="original">₹{product.originalPrice}</span>
            </p>
            <button
              disabled={!product.inStock}
              onClick={() => handleAddToCart(product)}
            >
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        ))}
      </div>

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
}

export default MarketPlace;
