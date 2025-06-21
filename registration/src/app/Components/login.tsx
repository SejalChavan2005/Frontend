"use client"; 
import Link from 'next/link';
import React, { useState, FC, FormEvent, ChangeEvent } from 'react';
import styles from './login.module.css'; 

const LoginPage: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password, rememberMe });
    alert('Login functionality not implemented yet. Check console for values.');
  };

   const handleGoogleSignIn = () => {
    console.log('Signing in with Google...');
    alert('Google Sign-In functionality not implemented yet.');
    
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  return (
    <div className={styles['login-page-container']}>
      <div className={styles['left-half-form']}>
        <div className={styles['login-card']}>
          <h2 className={styles['card-title']}>Channel of India</h2>
          <p className={styles['welcome-text']}>Welcome Back!</p>

          <form onSubmit={handleLogin} className={styles['login-form']}>
            <div className={styles['form-group']}>
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                required
              />
            </div>

            <div className={styles['form-group']}>
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                required
              />
            </div>

            <div className={styles['form-options']}>
              <label className={styles['remember-me']}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                Remember me
              </label>
              <a href="#" className={styles['forgot-password']}>
                Forgot Password?
              </a>
            </div>

            <div className={styles['form-actions']}>
              <button type="submit" className={styles['login-button']}>
                Sign In
              </button>
              <button type="button" className={styles['cancel-button']}>
                Cancel
              </button>
            </div>

            <div className={styles['or-separator']}>
              <span>or</span>
            </div> 
            <button
              type="button" 
              className={styles['google-sign-in-button']}
              onClick={handleGoogleSignIn}
            >
              <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" className={styles['google-icon']} />
              Sign in with Google
            </button>

          </form>

          <p className={styles['signup-text']}>
            No account? <Link href="/registration" className={styles['signup-link']}>Sign Up here</Link>
          </p>
        </div>
      </div>

      
      <div className={styles['right-half-image']}>
        <div className={styles['overlay-text']}>
          <p className={styles['image-caption-overlay']}>CAPTURE. UPLOAD. INSPIRE.</p>
          <p className={styles['image-description-overlay']}>
            Explore the latest snapshots from travelers across India from serene backwaters to majestic forts, each photo captures a unique story and discovery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;