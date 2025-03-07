import React, { useState } from "react";
import "./Index.css"; // Keep your existing CSS

export default function Register({ onRegister }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (username && email && password && password === confirmPassword) {
      onRegister(username); // Pass the username to the onRegister function
    }
  };

  return (
    <div className="login-page">
      {/* Welcome Message Above the Register Box */}
      <div className="welcome-container">
        <h1 className="welcome-title">
          <center>
            <b>Welcome to Tiny Trends!</b>
          </center>
        </h1>
        <p className="welcome-subtitle">
          <center>Your one-stop shop for adorable baby essentials💕</center>
        </p>
      </div>

      {/* Register Box Below Welcome Message */}
      <div className="login-container">
        <h2 className="login-title">Register to Continue</h2>
        <form onSubmit={handleRegister} className="login-form">
          <div className="login-input">
            <label>Username </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="login-input">
            <label>Email </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-input">
            <label>Password </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="login-input">
            <label>Confirm Password </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
