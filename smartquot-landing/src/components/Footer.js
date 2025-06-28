import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-section" id="contact">
      <div className="footer-grid">
        <div className="footer-brand-col">
          <div className="footer-logo-row">
            <Link to="/" className="logo-svg" aria-label="SmartQuot Logo">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="url(#sq-gradient-footer)"/>
                <g>
                  <rect x="13" y="13" width="22" height="28" rx="4" fill="#fff"/>
                  <rect x="17" y="19" width="14" height="2.5" rx="1.25" fill="#a855f7"/>
                  <rect x="17" y="24" width="14" height="2.5" rx="1.25" fill="#6c47ff"/>
                  <rect x="17" y="29" width="10" height="2.5" rx="1.25" fill="#23c6e1"/>
                </g>
                <defs>
                  <linearGradient id="sq-gradient-footer" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6c47ff"/>
                    <stop offset="1" stopColor="#a855f7"/>
                  </linearGradient>
                </defs>
              </svg>
            </Link>
            <div>
              <Link to="/" className="footer-brand">SmartQuot</Link>
              <div className="footer-brand-sub">Professional Quotations</div>
            </div>
          </div>
          <div className="footer-brand-desc">Streamline your sales process with intelligent quotation management.</div>
        </div>
        <div className="footer-links-col">
          <div className="footer-links-title">Product</div>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/templates">Templates</Link>
          <Link to="/integrations">Integrations</Link>
        </div>
        <div className="footer-links-col">
          <div className="footer-links-title">Legal</div>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/refund">Refund Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/cookie">Cookie Policy</Link>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-copyright-row">
        © {new Date().getFullYear()} SmartQuot. All rights reserved.
      </div>
    </footer>
  );
} 