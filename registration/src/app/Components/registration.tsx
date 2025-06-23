'use client';
import React, { useState } from 'react';
import './registration.css';

const Registration: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const passwordsMatch = password === confirmPassword;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    if (!passwordsMatch) return;

    // Handle form submission logic here
    console.log('Form submitted!');
  };

  return (
    <div className="registration-container">
      <div className="left-pane">
        <h1>CAPTURE. UPLOAD. INSPIRE.</h1>
        <p>
          Explore the latest snapshots from travelers across India — from serene
          backwaters to majestic forts, each photo captures a unique story of
          discovery.
        </p>
      </div>

      <div className="right-pane-container">
        <div className="right-pane">
          <div className="header-text">
            <h2>Channel of India</h2>
          </div>
          <h3>Create Account</h3>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={!passwordsMatch && submitted ? 'input-error' : ''}
            />

            {!passwordsMatch && submitted && (
              <p className="error-text">Passwords do not match.</p>
            )}

            <div className="button-group">
              <button type="submit" className="signup-btn">
                Sign Up
              </button>
              <button type="button" className="cancel-btn">
                Cancel
              </button>
            </div>
          </form>

          <p className="terms">
            <a href="#">Terms & Conditions</a>
          </p>
          <p className="signin-link">
            Already have an account? <a href="#">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
