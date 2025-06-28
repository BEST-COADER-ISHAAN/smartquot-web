import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TemplatesPage() {
  return (
    <div className="landing-root">
      <div className="container-95">
        <Navbar />
        
        <div className="page-content">
          <div className="page-hero">
            <h1>Templates</h1>
            <p>Choose from our collection of professional quotation templates designed for various industries.</p>
          </div>
          
          <div className="templates-grid">
            <div className="template-card">
              <h3>Basic Template</h3>
              <p>Clean and simple design perfect for any business.</p>
            </div>
            <div className="template-card">
              <h3>Professional Template</h3>
              <p>Elegant design with advanced formatting options.</p>
            </div>
            <div className="template-card">
              <h3>Modern Template</h3>
              <p>Contemporary design with bold typography and colors.</p>
            </div>
            <div className="template-card">
              <h3>Minimal Template</h3>
              <p>Minimalist approach focusing on content clarity.</p>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
} 