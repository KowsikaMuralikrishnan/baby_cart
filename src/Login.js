import React, { useState } from "react";
import "./Index.css"; // Keep your existing CSS

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username); // Pass the username to the onLogin function
    }
  };

  return (
    <div className="login-page">
      {/* Welcome Message Above the Login Box */}
      <div className="welcome-container">
        <h1 className="welcome-title ">
          <center>
            <b>Welcome to Tiny Trends!</b>
          </center>
        </h1>
        <p className="welcome-subtitle">
          <center>Your one-stop shop for adorable baby essentials💕</center>
        </p>
      </div>

      {/* Login Box Below Welcome Message */}
      <div className="login-container">
        <h2 className="login-title">Login to Continue</h2>
        <form onSubmit={handleLogin} className="login-form">
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
            <label>Password </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
