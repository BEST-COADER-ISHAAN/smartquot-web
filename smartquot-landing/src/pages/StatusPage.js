import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function StatusPage() {
  return (
    <div className="landing-root">
      <div className="container-95">
        <Navbar />
        
        <div className="page-content">
          <div className="page-hero">
            <h1>System Status</h1>
            <p>Check the current status of SmartQuot services and get real-time updates.</p>
          </div>
          
          <div className="status-sections">
            <div className="status-section">
              <h2>Current Status</h2>
              <div className="status-indicator operational">
                <span className="status-dot"></span>
                <span className="status-text">All Systems Operational</span>
              </div>
              <p className="status-description">All SmartQuot services are running normally.</p>
            </div>
            
            <div className="status-section">
              <h2>Service Components</h2>
              <div className="service-statuses">
                <div className="service-status">
                  <h3>Web Application</h3>
                  <span className="status operational">Operational</span>
                </div>
                <div className="service-status">
                  <h3>API Services</h3>
                  <span className="status operational">Operational</span>
                </div>
                <div className="service-status">
                  <h3>Database</h3>
                  <span className="status operational">Operational</span>
                </div>
                <div className="service-status">
                  <h3>File Storage</h3>
                  <span className="status operational">Operational</span>
                </div>
              </div>
            </div>
            
            <div className="status-section">
              <h2>Recent Updates</h2>
              <div className="status-updates">
                <div className="status-update">
                  <span className="update-time">Dec 15, 2024 - 10:30 AM</span>
                  <p>All services are operating normally. No issues reported.</p>
                </div>
                <div className="status-update">
                  <span className="update-time">Dec 14, 2024 - 2:15 PM</span>
                  <p>Scheduled maintenance completed successfully.</p>
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