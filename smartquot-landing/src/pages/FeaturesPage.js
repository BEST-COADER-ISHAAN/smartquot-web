import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function FeaturesPage() {
  return (
    <div className="landing-root">
      <div className="container-95">
        <Navbar />
        
        <div className="page-content">
          <div className="page-hero">
            <h1>Features</h1>
            <p>Discover all the powerful features that make SmartQuot the perfect quotation management solution for your business.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>Smart Quotation Builder</h3>
              <p>Create professional quotations with our intuitive step-by-step wizard.</p>
            </div>
            <div className="feature-card">
              <h3>Real-time Margin Analysis</h3>
              <p>Track profitability with advanced margin calculations and cost breakdowns.</p>
            </div>
            <div className="feature-card">
              <h3>Customer Management</h3>
              <p>Maintain comprehensive customer profiles with contact details and project history.</p>
            </div>
            <div className="feature-card">
              <h3>Multi-format Export</h3>
              <p>Generate beautiful PDFs or shareable web links with customizable templates.</p>
            </div>
            <div className="feature-card">
              <h3>Secure & Reliable</h3>
              <p>Enterprise-grade security with role-based access and automatic data backups.</p>
            </div>
            <div className="feature-card">
              <h3>Lightning Fast</h3>
              <p>Built for speed with instant search, real-time calculations, and seamless performance.</p>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
} 