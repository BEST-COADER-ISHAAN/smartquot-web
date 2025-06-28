import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RefundPolicyPage() {
  return (
    <div className="landing-root">
      <div className="container-95">
        <Navbar />
        
        <div className="refund-policy-root">
          <div className="refund-hero">
            <div className="refund-icon">
              <svg width="56" height="56" fill="none" viewBox="0 0 56 56"><circle cx="28" cy="28" r="28" fill="#fff0f0"/><path d="M28 16a12 12 0 1 1 0 24 12 12 0 0 1 0-24zm0 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 5h4v8h-4v-8zm0 10h4v2h-4v-2z" fill="#f87171"/></svg>
            </div>
            <h1 className="refund-title">
              Refund <span className="gradient-text">Policy</span>
            </h1>
            <div className="refund-subtitle">
              We do not offer refunds for our subscription services. Here's why and what we can do instead.
            </div>
            <div className="refund-alert-card">
              ⚠️ No refunds are provided for any subscription payments
            </div>
          </div>
          
          <div className="refund-why-section">
            <div className="refund-why-card">
              <div className="refund-why-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff0f0"/><path d="M16 8v16M8 16h16" stroke="#f87171" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div className="refund-why-title">Digital Service</div>
              <div className="refund-why-desc">Our service is digital and immediately accessible upon payment. Once you have access, the service has been delivered.</div>
            </div>
            <div className="refund-why-card">
              <div className="refund-why-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff0f0"/><path d="M16 8v16M8 16h16" stroke="#f87171" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div className="refund-why-title">Continuous Access</div>
              <div className="refund-why-desc">You maintain access to your data and services throughout your subscription period, regardless of usage.</div>
            </div>
            <div className="refund-why-card">
              <div className="refund-why-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff0f0"/><path d="M16 8v16M8 16h16" stroke="#f87171" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div className="refund-why-title">Fair Pricing</div>
              <div className="refund-why-desc">Our pricing is transparent and competitive. We offer free trials and flexible cancellation options.</div>
            </div>
          </div>
          
          <div className="refund-support-section">
            <div className="refund-support-card">
              <div className="refund-support-title">Need Help Instead?</div>
              <div className="refund-support-desc">Our support team is here to help you get the most out of SmartQuot. Contact us for assistance with setup, features, or any questions.</div>
            </div>
            <div className="refund-support-card">
              <div className="refund-support-title">Free Trial Available</div>
              <div className="refund-support-desc">Try SmartQuot risk-free with our free trial. No credit card required to start exploring our features.</div>
            </div>
            <div className="refund-support-card">
              <div className="refund-support-title">Easy Cancellation</div>
              <div className="refund-support-desc">Cancel your subscription anytime from your account settings. No questions asked, no hidden fees.</div>
            </div>
          </div>
          
          <div className="refund-subscription-card">
            <div className="refund-subscription-title">Subscription Management</div>
            <div className="refund-subscription-desc">
              You can manage your subscription, change plans, or cancel at any time through your account dashboard. 
              Changes take effect at the end of your current billing period. We'll send you email confirmations for any changes made to your account.
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
} 