import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DocumentationPage() {
  return (
    <div className="landing-root">
      <div className="container-95">
        <Navbar />
        
        <div className="page-content">
          <div className="page-hero">
            <h1>Documentation</h1>
            <p>Comprehensive guides and API documentation for developers and power users.</p>
          </div>
          
          <div className="docs-sections">
            <div className="docs-section">
              <h2>API Reference</h2>
              <div className="docs-articles">
                <div className="docs-article">
                  <h3>Authentication</h3>
                  <p>Learn how to authenticate with the SmartQuot API.</p>
                </div>
                <div className="docs-article">
                  <h3>Quotations API</h3>
                  <p>Create, read, update, and delete quotations programmatically.</p>
                </div>
                <div className="docs-article">
                  <h3>Customers API</h3>
                  <p>Manage customer data through our REST API.</p>
                </div>
              </div>
            </div>
            
            <div className="docs-section">
              <h2>Integration Guides</h2>
              <div className="docs-articles">
                <div className="docs-article">
                  <h3>Webhook Setup</h3>
                  <p>Configure webhooks to receive real-time updates.</p>
                </div>
                <div className="docs-article">
                  <h3>SDK Examples</h3>
                  <p>Code examples for popular programming languages.</p>
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