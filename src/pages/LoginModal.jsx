import React, { useState } from 'react';
import './LoginModal.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const LoginModal = () => {
    const [selectedRole, setSelectedRole] = useState('vendor');
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert('please fill all fileds');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDocRef = doc(db, 'users', user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userType = userDocSnap.data().type;

        if (userType === 'vendor') {
          navigate('/marketplace');
        } else if (userType === 'supplier') {
          navigate('/supplier-dashboard');
        } else {
          alert('invalid user type');
        }
      } else {
        alert('data not fount in firestore');
      }

    } catch (error) {
      console.error('Login Error:', error);

      if (error.code === 'user-not-found') {
        alert('user not found.');
      } else if (error.code === 'wrong-password') {
        alert('invalid email or password');
      } else if (error.code === 'invalid-email') {
        alert('invalid email or password');
      } else {
        alert('Login error: ' + error.message);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="login-modal">
      <div className="login-box">
        <a href="/">
          <button className="close-btn" onClick={() => setIsOpen(false)}>&times;</button>
        </a>
        <h2>Welcome to Street Scoop Connect</h2>
        <p className="subtitle">Login to your account to get started</p>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="role-selection">
          <button
            className={selectedRole === 'vendor' ? 'active' : ''}
            onClick={() => setSelectedRole('vendor')}
          >
            I'm a Vendor
          </button>
          <button
            className={selectedRole === 'supplier' ? 'active' : ''}
            onClick={() => setSelectedRole('supplier')}
          >
            I'm a Supplier
          </button>
        </div>


        <p><a href="/register">don't have an account ?</a></p>
        <button className="login-btn" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginModal;
