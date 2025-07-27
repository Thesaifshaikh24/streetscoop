// ✅ Updated Navbar.jsx
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { AuthContext } from '../App';
import { signOut } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserType = async () => {
      if (currentUser) {
        const docRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserType(docSnap.data().type);
        }
      } else {
        setUserType(null);
      }
    };
    fetchUserType();
  }, [currentUser]);

  const handleLogout = async () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (!confirmLogout) return;

    try {
      await signOut(auth);
      console.log('User logged out');
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">StreetScoop</h2>
      </div>

      <div className="navbar-center">
        <Link to="/">Home</Link>
        <Link to="/marketplace">Marketplace</Link>
        {/* <Link to="/vendors">For Vendors</Link> */}
        {/* <Link to="/suppliers">For Suppliers</Link> */}
        <Link to="/about">About</Link>
      </div>

      <div className="navbar-right">
        {currentUser ? (
          userType === 'supplier' ? (
            <>
              <Link to="/supplier-dashboard">Dashboard</Link>
              <button onClick={handleLogout} className="logout-btn" style={{ margin: '0 auto' }}>
                Logout
              </button>
            </>
          ) : (
            <button onClick={handleLogout} className="logout-btn" style={{ margin: '0 auto' }}>
              Logout
            </button>
          )
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="signup-btn">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
