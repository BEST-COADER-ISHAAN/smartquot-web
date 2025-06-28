import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import TemplatesPage from './pages/TemplatesPage';
import IntegrationsPage from './pages/IntegrationsPage';
import HelpCenterPage from './pages/HelpCenterPage';
import DocumentationPage from './pages/DocumentationPage';
import ContactUsPage from './pages/ContactUsPage';
import StatusPage from './pages/StatusPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import TermsPage from './pages/TermsPage';
import CookiePolicyPage from './pages/CookiePolicyPage';

function AppContent() {
  const { loginWithRedirect, isAuthenticated, isLoading, user } = useAuth0();
  const [navOpen, setNavOpen] = useState(false);

  // Handler for login button
  const handleLogin = () => {
    if (isAuthenticated) {
      // If already authenticated, redirect to dashboard or main app area
      window.location.href = '/dashboard';
    } else {
      // If not authenticated, start login process
      loginWithRedirect({
        redirectUri: 'https://smartquot.net/callback',
      });
    }
  };

  // Close nav on link click (mobile)
  const handleNavLinkClick = () => setNavOpen(false);

  return (
    <div className="landing-root">
      <div className="container-95">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-left">
            <span className="logo-svg" aria-label="SmartQuot Logo">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="url(#sq-gradient)"/>
                <g>
                  <rect x="13" y="13" width="22" height="28" rx="4" fill="#fff"/>
                  <rect x="17" y="19" width="14" height="2.5" rx="1.25" fill="#a855f7"/>
                  <rect x="17" y="24" width="14" height="2.5" rx="1.25" fill="#6c47ff"/>
                  <rect x="17" y="29" width="10" height="2.5" rx="1.25" fill="#23c6e1"/>
                </g>
                <defs>
                  <linearGradient id="sq-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6c47ff"/>
                    <stop offset="1" stopColor="#23c6e1"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <div className="brand-stack">
              <div className="brand">SmartQuot</div>
              <div className="subtitle">Professional Quotation Management</div>
            </div>
          </div>
          <div className="navbar-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        {/* Main Section */}
        <main className="main-content" id="home">
          <section className="hero">
            <div className="hero-left">
              <h1>
                Create Professional <span className="gradient-text">Quotations</span><br /> in Minutes
              </h1>
              <p className="desc">
                Streamline your sales process with our intelligent quotation management system. Build, track, and analyze quotations with powerful margin insights and beautiful exports.
              </p>
              <div className="hero-actions">
                <button className="view-pricing-btn" onClick={() => window.location.href = '#pricing'}>
                  View Pricing <span className="arrow">→</span>
                </button>
                <button className="login-btn" onClick={handleLogin} disabled={isLoading}>
                  {isAuthenticated ? 'Go to Dashboard' : 'Login'}
                </button>
              </div>
              <div className="features-row">
                <span>✔ No setup fees</span>
                <span>✔ Cancel anytime</span>
              </div>
            </div>
            <div className="hero-right">
              <div className="quotation-card">
                <div className="quotation-header">
                  <span className="quotation-id">Quotation #QT0101A</span>
                  <span className="profit-badge">+25% Profit</span>
                  <span className="approved-badge">Approved</span>
                </div>
                <div className="quotation-details">
                  <div className="row"><span>Customer:</span> <span>Premium Interiors Ltd.</span></div>
                  <div className="row"><span>Products:</span> <span>12 Items</span></div>
                  <div className="row total"><span>Total Amount:</span> <span>₹2,45,000</span></div>
                  <div className="row margin"><span>Profit Margin:</span> <span>32.5%</span></div>
                </div>
                <div className="quotation-actions">
                  <button className="download-btn">Download PDF</button>
                  <button className="share-btn">Share Link</button>
                </div>
                <div className="setup-badge">⚡ 2 min setup</div>
              </div>
            </div>
          </section>
        </main>

        {/* Modern Features Grid Section */}
        <section className="features-modern-section" id="features">
          <h2 className="features-modern-heading">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
          <p className="features-modern-subtitle">
            Powerful features designed to streamline your quotation process and boost your business growth.
          </p>
          <div className="features-modern-grid">
            <div className="feature-modern-card">
              <span className="feature-modern-icon" style={{background: 'linear-gradient(135deg, #e0e7ff, #a855f7)'}}>
                <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect x="4" y="4" width="20" height="20" rx="5" fill="#fff"/><path d="M9 9h10v2H9V9zm0 4h10v2H9v-2zm0 4h6v2H9v-2z" fill="#a855f7"/></svg>
              </span>
              <div className="feature-modern-title">Smart Quotation Builder</div>
              <div className="feature-modern-desc">Create professional quotations with our intuitive step-by-step wizard. Organize by rooms or general lists.</div>
            </div>
            <div className="feature-modern-card">
              <span className="feature-modern-icon" style={{background: 'linear-gradient(135deg, #e0e7ff, #6c47ff)'}}>
                <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect x="4" y="4" width="20" height="20" rx="5" fill="#fff"/><path d="M8 18l4-4 4 4 4-8" stroke="#6c47ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div className="feature-modern-title">Real-time Margin Analysis</div>
              <div className="feature-modern-desc">Track profitability with advanced margin calculations and cost breakdowns for every quotation.</div>
            </div>
            <div className="feature-modern-card">
              <span className="feature-modern-icon" style={{background: 'linear-gradient(135deg, #e0e7ff, #23c6e1)'}}>
                <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect x="4" y="4" width="20" height="20" rx="5" fill="#fff"/><path d="M10 14h8M14 10v8" stroke="#23c6e1" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <div className="feature-modern-title">Customer Management</div>
              <div className="feature-modern-desc">Maintain comprehensive customer profiles with contact details, GST numbers, and project history.</div>
            </div>
            <div className="feature-modern-card">
              <span className="feature-modern-icon" style={{background: 'linear-gradient(135deg, #e0e7ff, #6c47ff)'}}>
                <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect x="4" y="4" width="20" height="20" rx="5" fill="#fff"/><path d="M14 8v12M8 14h12" stroke="#6c47ff" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <div className="feature-modern-title">Multi-format Export</div>
              <div className="feature-modern-desc">Generate beautiful PDFs or shareable web links with customizable templates and branding.</div>
            </div>
            <div className="feature-modern-card">
              <span className="feature-modern-icon" style={{background: 'linear-gradient(135deg, #e0e7ff, #a855f7)'}}>
                <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect x="4" y="4" width="20" height="20" rx="5" fill="#fff"/><path d="M14 8v12M8 14h12" stroke="#a855f7" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <div className="feature-modern-title">Secure & Reliable</div>
              <div className="feature-modern-desc">Enterprise-grade security with role-based access and automatic data backups.</div>
            </div>
            <div className="feature-modern-card">
              <span className="feature-modern-icon" style={{background: 'linear-gradient(135deg, #e0e7ff, #23c6e1)'}}>
                <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect x="4" y="4" width="20" height="20" rx="5" fill="#fff"/><path d="M8 14h12" stroke="#23c6e1" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <div className="feature-modern-title">Lightning Fast</div>
              <div className="feature-modern-desc">Built for speed with instant search, real-time calculations, and seamless performance.</div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-section" id="how">
          <h2>How It Works</h2>
          <div className="how-steps">
            <div className="how-step">
              <div className="how-icon">📝</div>
              <h4>1. Add Products</h4>
              <p>Enter your products and customer details.</p>
            </div>
            <div className="how-step">
              <div className="how-icon">⚡</div>
              <h4>2. Generate Quote</h4>
              <p>SmartQuot calculates totals and margins instantly.</p>
            </div>
            <div className="how-step">
              <div className="how-icon">🚀</div>
              <h4>3. Send & Track</h4>
              <p>Send your quote and track its status in real time.</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing-section" id="pricing">
          <h2 className="pricing-heading">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="pricing-subtitle">
            Choose the perfect plan for your business. Start building professional quotations today.
          </p>
          <div className="pricing-badge-row">
            <span className="pricing-badge">💚 Save 20% with annual billing</span>
          </div>
          <div className="pricing-cards">
            {/* Starter Plan */}
            <div className="pricing-card">
              <div className="pricing-icon" style={{background: 'linear-gradient(135deg, #e0e7ff, #a855f7)'}}>
                <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect x="4" y="4" width="20" height="20" rx="5" fill="#fff"/><path d="M14 8v12" stroke="#a855f7" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div className="pricing-title">Starter</div>
              <div className="pricing-desc">Perfect for small businesses getting started</div>
              <div className="pricing-amount">₹999<span className="pricing-per">/month</span></div>
              <ul className="pricing-features">
                <li>Up to 50 quotations/month</li>
                <li>Basic customer management</li>
                <li>PDF export</li>
                <li>Email support</li>
                <li>2 user accounts</li>
                <li>Basic templates</li>
              </ul>
              <button className="view-pricing-btn">Get Started</button>
            </div>
            {/* Professional Plan */}
            <div className="pricing-card popular">
              <div className="pricing-popular-badge">Most Popular</div>
              <div className="pricing-icon" style={{background: 'linear-gradient(135deg, #e0e7ff, #6c47ff)'}}>
                <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect x="4" y="4" width="20" height="20" rx="5" fill="#fff"/><path d="M14 8l4 12-4-4-4 4 4-12z" fill="#6c47ff"/></svg>
              </div>
              <div className="pricing-title">Professional</div>
              <div className="pricing-desc">Ideal for growing businesses</div>
              <div className="pricing-amount">₹2,499<span className="pricing-per">/month</span></div>
              <ul className="pricing-features">
                <li>Up to 200 quotations/month</li>
                <li>Advanced customer management</li>
                <li>PDF & Web link export</li>
                <li>Priority email support</li>
                <li>5 user accounts</li>
                <li>Custom templates</li>
                <li>Margin analysis</li>
                <li>Product catalog management</li>
              </ul>
              <button className="view-pricing-btn">Get Started</button>
            </div>
            {/* Enterprise Plan */}
            <div className="pricing-card">
              <div className="pricing-icon" style={{background: 'linear-gradient(135deg, #e0e7ff, #181c2a)'}}>
                <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect x="4" y="4" width="20" height="20" rx="5" fill="#fff"/><path d="M14 8l4 12-4-4-4 4 4-12z" fill="#181c2a"/></svg>
              </div>
              <div className="pricing-title">Enterprise</div>
              <div className="pricing-desc">For large teams and enterprises</div>
              <div className="pricing-amount">₹4,999<span className="pricing-per">/month</span></div>
              <ul className="pricing-features">
                <li>Unlimited quotations</li>
                <li>Complete CRM integration</li>
                <li>All export formats</li>
                <li>Phone & email support</li>
                <li>Unlimited user accounts</li>
                <li>White-label templates</li>
                <li>Advanced analytics</li>
                <li>API access</li>
                <li>Custom integrations</li>
                <li>Dedicated account manager</li>
              </ul>
              <button className="view-pricing-btn pricing-secondary-btn">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section" id="faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <div className="faq-q">What is SmartQuot?</div>
              <div className="faq-a">SmartQuot is a modern quotation management platform for businesses.</div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Can I try it for free?</div>
              <div className="faq-a">Yes! Our Starter plan is free for up to 5 quotes per month.</div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Is my data secure?</div>
              <div className="faq-a">Absolutely. We use enterprise-grade security and encryption.</div>
            </div>
          </div>
        </section>

        {/* Footer / Contact Section */}
        <footer className="footer-section" id="contact">
          <div className="footer-grid">
            <div className="footer-brand-col">
              <div className="footer-logo-row">
                <span className="logo-svg" aria-label="SmartQuot Logo">
                  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="12" fill="url(#sq-gradient-footer)"/>
                    <g>
                      <rect x="13" y="13" width="22" height="28" rx="4" fill="#fff"/>
                      <rect x="17" y="19" width="14" height="2.5" rx="1.25" fill="#a855f7"/>
                      <rect x="17" y="24" width="14" height="2.5" rx="1.25" fill="#6c47ff"/>
                      <rect x="17" y="29" width="10" height="2.5" rx="1.25" fill="#23c6e1"/>
                    </g>
                    <defs>
                      <linearGradient id="sq-gradient-footer" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6c47ff"/>
                        <stop offset="1" stopColor="#a855f7"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <div>
                  <div className="footer-brand">SmartQuot</div>
                  <div className="footer-brand-sub">Professional Quotations</div>
                </div>
              </div>
              <div className="footer-brand-desc">Streamline your sales process with intelligent quotation management.</div>
            </div>
            <div className="footer-links-col">
              <div className="footer-links-title">Product</div>
              <Link to="/features">Features</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/templates">Templates</Link>
              <Link to="/integrations">Integrations</Link>
            </div>
            <div className="footer-links-col">
              <div className="footer-links-title">Legal</div>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/refund">Refund Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/cookie">Cookie Policy</Link>
            </div>
          </div>
          <hr className="footer-divider" />
          <div className="footer-copyright-row">
            © {new Date().getFullYear()} SmartQuot. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

// Callback component for Auth0
function Callback() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    // Redirect to dashboard after successful authentication
    window.location.href = '/dashboard';
    return null;
  }

  return <Navigate to="/" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/callback" element={<Callback />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/help" element={<HelpCenterPage />} />
        <Route path="/docs" element={<DocumentationPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/refund" element={<RefundPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookie" element={<CookiePolicyPage />} />
        {/* Default: Landing page with all sections and footer */}
        <Route path="*" element={<AppContent />} />
      </Routes>
    </BrowserRouter>
  );
}
