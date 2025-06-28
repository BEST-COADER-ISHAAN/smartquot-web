import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <div className="landing-root">
      <div className="container-95">
        <Navbar />
        
        <div className="page-content">
          <div className="page-hero">
            <h1>Terms of Service</h1>
            <p>Please read these terms carefully before using SmartQuot services.</p>
          </div>
          
          <div className="terms-sections">
            <div className="terms-section">
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing and using SmartQuot, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </div>
            
            <div className="terms-section">
              <h2>2. Use License</h2>
              <p>Permission is granted to temporarily download one copy of SmartQuot for personal, non-commercial transitory viewing only.</p>
            </div>
            
            <div className="terms-section">
              <h2>3. Disclaimer</h2>
              <p>The materials on SmartQuot are provided on an 'as is' basis. SmartQuot makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </div>
            
            <div className="terms-section">
              <h2>4. Limitations</h2>
              <p>In no event shall SmartQuot or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SmartQuot, even if SmartQuot or a SmartQuot authorized representative has been notified orally or in writing of the possibility of such damage.</p>
            </div>
            
            <div className="terms-section">
              <h2>5. Revisions and Errata</h2>
              <p>The materials appearing on SmartQuot could include technical, typographical, or photographic errors. SmartQuot does not warrant that any of the materials on its website are accurate, complete or current.</p>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
} 