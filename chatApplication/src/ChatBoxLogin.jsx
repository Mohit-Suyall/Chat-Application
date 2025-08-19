import React, { useState } from 'react';
import './index.css'; // अपनी CSS फाइल इम्पोर्ट करें

export default function ChatBoxLogin() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="nav">
        <div className="hero-head">
          <h1>ChatBOX</h1>
          <hr />
          <p>Talk to Private</p>
        </div>
        <div className="hero-header2">
          <span className="material-symbols-outlined">language</span>
          <a href="#">Sign in</a>
          <button><a href="#">Request Demo</a></button>
        </div>
      </nav>

      {/* Login Form */}
      <div className="login">
        <h1>User login</h1>
        <p>Hey! Enter Your details for log in to your account</p>

        <div className="input-container">
          <input
            type="text"
            id="nameInput"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {name.trim().length > 0 && (
            <span className="tick" id="tick">
              ✔️
            </span>
          )}
        </div>

        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            id="passwordInput"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            id="toggleBtn"
            className="toggle-btn"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <p>Having Trouble in Login in?</p>
        <button><a href="#">Login In</a></button>
      </div>
    </>
  );
}
