import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactUsPage() {
  return (
    <div className="landing-root">
      <div className="container-95">
        <Navbar />
        
        <div className="page-content">
          <div className="page-hero">
            <h1>Contact Us</h1>
            <p>Get in touch with our team. We're here to help you succeed with SmartQuot.</p>
          </div>
          
          <div className="contact-sections">
            <div className="contact-section">
              <h2>Get Support</h2>
              <div className="contact-methods">
                <div className="contact-method">
                  <h3>Email Support</h3>
                  <p>support@smartquot.net</p>
                  <p>We typically respond within 24 hours.</p>
                </div>
                <div className="contact-method">
                  <h3>Live Chat</h3>
                  <p>Available during business hours</p>
                  <p>Get instant help from our support team.</p>
                </div>
                <div className="contact-method">
                  <h3>Phone Support</h3>
                  <p>+91 98765 43210</p>
                  <p>Available for Enterprise customers.</p>
                </div>
              </div>
            </div>
            
            <div className="contact-section">
              <h2>Sales Inquiries</h2>
              <div className="contact-methods">
                <div className="contact-method">
                  <h3>Sales Team</h3>
                  <p>sales@smartquot.net</p>
                  <p>Learn about our enterprise solutions.</p>
                </div>
                <div className="contact-method">
                  <h3>Partnership</h3>
                  <p>partners@smartquot.net</p>
                  <p>Become a SmartQuot partner.</p>
                </div>
              </div>
            </div>

            <div className="contact-section">
              <h2>Company Address</h2>
              <div className="contact-methods">
                <div className="contact-method">
                  <h3>Shree Krishna Traders</h3>
                  <p>Kotra, Ajmer-305001</p>
                  <p>Rajasthan, India</p>
                  <div className="gst-info">
                    <h4>GST Number:</h4>
                    <p>08AJZPM3311L1ZO</p>
                  </div>
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