import React, { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MarketPlace from './pages/MarketPlace';
import VendorRegistration from './pages/VendorRegistration';
import SupplierRegistration from './pages/SupplierRegistration';
import AboutSection from './pages/AboutSection';
import LoginModal from './pages/LoginModal';
import SignupModal from './pages/SignupModal';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import SupplierDashboard from './pages/SupplierDashboard';

export const AuthContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Marketplace" element={<MarketPlace />} />
          <Route path="/vendors" element={<VendorRegistration />} />
          <Route path="/suppliers" element={<SupplierRegistration />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/login" element={<LoginModal />} />
          <Route path="/register" element={<SignupModal />} />
          <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
