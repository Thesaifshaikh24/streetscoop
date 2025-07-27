import React, { useState } from 'react';
import './SignupModal.css';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

const SignupModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedRole, setSelectedRole] = useState('vendor');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSignup = async () => {
    if (pass !== confirmPass) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        name: name,
        email: email,
        type: selectedRole
      });

      alert("Signup Successful");

      if (selectedRole === 'vendor') {
        navigate('/marketplace');
      } else {
        navigate('/supplier-dashboard');
      }

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="signup-modal">
        <a href="/"><button className="close-btn" onClick={closeModal}>×</button></a>
        <h2>Welcome to Street Scoop Connect</h2>
        <p>create a new one to get started</p>

        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Create a password" value={pass} onChange={(e) => setPass(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
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

        <button className="create-account-btn" onClick={handleSignup}>Create Account</button>
      </div>
    </div>
  );
};

export default SignupModal;
