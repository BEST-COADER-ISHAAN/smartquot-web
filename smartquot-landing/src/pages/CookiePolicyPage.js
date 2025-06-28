import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CookiePolicyPage() {
  return (
    <div className="landing-root">
      <div className="container-95">
        <Navbar />
        
        <div className="page-content">
          <div className="page-hero">
            <h1>Cookie Policy</h1>
            <p>Learn how SmartQuot uses cookies and similar technologies to improve your experience.</p>
          </div>
          
          <div className="cookie-sections">
            <div className="cookie-section">
              <h2>What Are Cookies?</h2>
              <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.</p>
            </div>
            
            <div className="cookie-section">
              <h2>How We Use Cookies</h2>
              <div className="cookie-types">
                <div className="cookie-type">
                  <h3>Essential Cookies</h3>
                  <p>These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</p>
                </div>
                <div className="cookie-type">
                  <h3>Analytics Cookies</h3>
                  <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                </div>
                <div className="cookie-type">
                  <h3>Functional Cookies</h3>
                  <p>These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.</p>
                </div>
              </div>
            </div>
            
            <div className="cookie-section">
              <h2>Managing Cookies</h2>
              <p>You can control and manage cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website.</p>
            </div>
            
            <div className="cookie-section">
              <h2>Updates to This Policy</h2>
              <p>We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.</p>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
} 