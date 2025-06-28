import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="landing-root">
      <div className="container-95">
        <Navbar />
        
        <div className="privacy-policy-root">
          <div className="privacy-hero">
            <div className="privacy-icon">
              <svg width="56" height="56" fill="none" viewBox="0 0 56 56"><circle cx="28" cy="28" r="28" fill="#e0e7ff"/><path d="M28 16a8 8 0 0 1 8 8v2h-2v-2a6 6 0 0 0-12 0v2h-2v-2a8 8 0 0 1 8-8zm-8 12h16v12a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4V28zm8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#6c47ff"/></svg>
            </div>
            <h1 className="privacy-title">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <div className="privacy-subtitle">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </div>
            <div className="privacy-badge-row">
              <span className="privacy-badge">🟢 Last updated: December 2024</span>
            </div>
          </div>
          
          <div className="privacy-glance-section">
            <h2 className="privacy-glance-title">Privacy at a Glance</h2>
            <div className="privacy-glance-sub">Key points about how we handle your data</div>
            <div className="privacy-glance-cards">
              <div className="privacy-glance-card">
                <div className="privacy-glance-icon" style={{background: '#e0f7ef'}}>
                  <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#e0f7ef"/><path d="M16 10a6 6 0 0 1 6 6v1.5h-1.5V16a4.5 4.5 0 0 0-9 0v1.5H10V16a6 6 0 0 1 6-6zm-6 7.5h12V24a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-6.5zm6 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="#22c55e"/></svg>
                </div>
                <div className="privacy-glance-card-title">We Don't Sell Data</div>
                <div className="privacy-glance-card-desc">Your personal information is never sold to third parties for marketing purposes.</div>
              </div>
              <div className="privacy-glance-card">
                <div className="privacy-glance-icon" style={{background: '#e0e7ff'}}>
                  <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#e0e7ff"/><path d="M16 10a6 6 0 0 1 6 6v1.5h-1.5V16a4.5 4.5 0 0 0-9 0v1.5H10V16a6 6 0 0 1 6-6zm-6 7.5h12V24a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-6.5zm6 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="#6c47ff"/></svg>
                </div>
                <div className="privacy-glance-card-title">Secure Storage</div>
                <div className="privacy-glance-card-desc">All data is encrypted and stored securely with enterprise-grade protection.</div>
              </div>
              <div className="privacy-glance-card">
                <div className="privacy-glance-icon" style={{background: '#f3e8ff'}}>
                  <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#f3e8ff"/><path d="M16 10a6 6 0 0 1 6 6v1.5h-1.5V16a4.5 4.5 0 0 0-9 0v1.5H10V16a6 6 0 0 1 6-6zm-6 7.5h12V24a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-6.5zm6 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="#a855f7"/></svg>
                </div>
                <div className="privacy-glance-card-title">You Control Your Data</div>
                <div className="privacy-glance-card-desc">Access, update, or delete your information anytime through your account.</div>
              </div>
            </div>
          </div>
          
          <div className="privacy-info-section">
            <div className="privacy-info-card">
              <div className="privacy-info-title-row">
                <span className="privacy-info-icon">
                  <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><circle cx="11" cy="11" r="11" fill="#e0e7ff"/><path d="M11 6a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm-1 4h2v6h-2v-6z" fill="#6c47ff"/></svg>
                </span>
                <span className="privacy-info-title">Information We Collect</span>
              </div>
              <ul className="privacy-info-list">
                <li>Account information (name, email, company details)</li>
                <li>Usage data and analytics</li>
                <li>Customer and quotation data you input</li>
                <li>Payment information (processed securely by third parties)</li>
                <li>Device and browser information</li>
                <li>Communication records with our support team</li>
              </ul>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="privacy-info-section">
            <div className="privacy-info-card">
              <div className="privacy-info-title-row">
                <span className="privacy-info-icon">
                  <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><circle cx="11" cy="11" r="11" fill="#e0e7ff"/><path d="M11 6a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm-1 4h2v6h-2v-6z" fill="#6c47ff"/></svg>
                </span>
                <span className="privacy-info-title">How We Use Your Information</span>
              </div>
              <ul className="privacy-info-list">
                <li>Provide and improve our quotation management services</li>
                <li>Process payments and manage subscriptions</li>
                <li>Send important updates and notifications</li>
                <li>Provide customer support and technical assistance</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Comply with legal obligations and prevent fraud</li>
              </ul>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="privacy-info-section">
            <div className="privacy-info-card">
              <div className="privacy-info-title-row">
                <span className="privacy-info-icon">
                  <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><circle cx="11" cy="11" r="11" fill="#e0e7ff"/><path d="M11 6a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm-1 4h2v6h-2v-6z" fill="#6c47ff"/></svg>
                </span>
                <span className="privacy-info-title">Information Sharing</span>
              </div>
              <ul className="privacy-info-list">
                <li>We do not sell your personal information to third parties</li>
                <li>Service providers who help us operate our platform</li>
                <li>Payment processors for subscriptions management</li>
                <li>Legal authorities when required by law</li>
                <li>Business transfers (mergers, acquisitions) with notice</li>
                <li>With your explicit consent for specific purposes</li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div className="privacy-info-section">
            <div className="privacy-info-card">
              <div className="privacy-info-title-row">
                <span className="privacy-info-icon">
                  <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><circle cx="11" cy="11" r="11" fill="#e0e7ff"/><path d="M11 6a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm-1 4h2v6h-2v-6z" fill="#6c47ff"/></svg>
                </span>
                <span className="privacy-info-title">Data Security</span>
              </div>
              <ul className="privacy-info-list">
                <li>Industry-standard encryption for data transmission</li>
                <li>Secure cloud storage with regular backups</li>
                <li>Access controls and authentication measures</li>
                <li>Regular security audits and monitoring</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures for security breaches</li>
              </ul>
            </div>
          </div>

          {/* Your Data Rights */}
          <div className="privacy-rights-section">
            <h2 className="privacy-rights-title">Your Data Rights</h2>
            <div className="privacy-rights-sub">You have control over your personal information</div>
            <div className="privacy-rights-cards-row">
              <div className="privacy-rights-card">
                <div className="privacy-rights-card-title">Access & Portability</div>
                <ul>
                  <li>Request a copy of data</li>
                  <li>Export your information and customer data</li>
                  <li>View what information we have about you</li>
                  <li>Understand how your data is processed</li>
                </ul>
              </div>
              <div className="privacy-rights-card">
                <div className="privacy-rights-card-title">Control & Deletion</div>
                <ul>
                  <li>Update or correct your information</li>
                  <li>Delete your account and data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Restrict certain data processing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cookies & Tracking */}
          <div className="privacy-cookies-section">
            <div className="privacy-cookies-card">
              <div className="privacy-cookies-title">Cookies & Tracking</div>
              <div className="privacy-cookies-row">
                <div className="privacy-cookies-col">
                  <div className="privacy-cookies-col-title">Essential Cookies</div>
                  <div className="privacy-cookies-col-desc">Required for platform operation, security, and basic preferences. You can disable cookies in your browser settings, but some features may not work.</div>
                </div>
                <div className="privacy-cookies-col">
                  <div className="privacy-cookies-col-title">Analytics Cookies</div>
                  <div className="privacy-cookies-col-desc">Help us measure performance, analyze usage, and provide personalized features. You can opt out in your browser settings or cookie preferences.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
} 