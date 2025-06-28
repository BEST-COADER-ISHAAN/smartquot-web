import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HelpCenterPage() {
  return (
    <div className="landing-root">
      <div className="container-95">
        <Navbar />
        
        <div className="page-content">
          <div className="page-hero">
            <h1>Help Center</h1>
            <p>Find answers to common questions and learn how to get the most out of SmartQuot.</p>
          </div>
          
          <div className="help-sections">
            <div className="help-section">
              <h2>Getting Started</h2>
              <div className="help-articles">
                <div className="help-article">
                  <h3>How to create your first quotation</h3>
                  <p>Step-by-step guide to creating your first professional quotation.</p>
                </div>
                <div className="help-article">
                  <h3>Setting up your account</h3>
                  <p>Configure your account settings and preferences.</p>
                </div>
              </div>
            </div>
            
            <div className="help-section">
              <h2>Features & Usage</h2>
              <div className="help-articles">
                <div className="help-article">
                  <h3>Customer management</h3>
                  <p>Learn how to manage your customer database effectively.</p>
                </div>
                <div className="help-article">
                  <h3>Template customization</h3>
                  <p>Customize quotation templates to match your brand.</p>
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