import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export default function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo-svg" aria-label="SmartQuot Logo">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="12" fill="url(#sq-gradient)"/>
            <g>
              <rect x="13" y="13" width="22" height="28" rx="4" fill="#fff"/>
              <rect x="17" y="19" width="14" height="2.5" rx="1.25" fill="#a855f7"/>
              <rect x="17" y="24" width="14" height="2.5" rx="1.25" fill="#6c47ff"/>
              <rect x="17" y="29" width="10" height="2.5" rx="1.25" fill="#23c6e1"/>
            </g>
            <defs>
              <linearGradient id="sq-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6c47ff"/>
                <stop offset="1" stopColor="#23c6e1"/>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <div className="brand-stack">
          <div className="brand">SmartQuot</div>
          <div className="subtitle">Professional Quotation Management</div>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="navbar-actions">
        {isLoading ? null : isAuthenticated ? (
          <>
            <span style={{ marginRight: 12, fontWeight: 500 }}>{user?.name}</span>
            <button className="view-pricing-btn" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
          </>
        ) : (
          <button className="view-pricing-btn" onClick={loginWithRedirect}>Log In</button>
        )}
      </div>
    </nav>
  );
} 