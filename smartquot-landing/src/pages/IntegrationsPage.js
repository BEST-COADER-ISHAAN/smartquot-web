import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function IntegrationsPage() {
  return (
    <div className="landing-root">
      <div className="container-95">
        <Navbar />
        
        <div className="page-content">
          <div className="page-hero">
            <h1>Integrations</h1>
            <p>Connect SmartQuot with your favorite tools and services to streamline your workflow.</p>
          </div>
          
          <div className="integrations-grid">
            <div className="integration-card">
              <h3>CRM Systems</h3>
              <p>Integrate with popular CRM platforms like Salesforce, HubSpot, and Pipedrive.</p>
            </div>
            <div className="integration-card">
              <h3>Accounting Software</h3>
              <p>Connect with QuickBooks, Xero, and other accounting platforms.</p>
            </div>
            <div className="integration-card">
              <h3>Payment Gateways</h3>
              <p>Accept payments through Stripe, PayPal, and other payment processors.</p>
            </div>
            <div className="integration-card">
              <h3>Email Marketing</h3>
              <p>Sync with Mailchimp, Constant Contact, and other email platforms.</p>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
} 