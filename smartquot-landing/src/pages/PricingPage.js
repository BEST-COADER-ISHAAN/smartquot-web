import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '₹999',
      desc: 'Perfect for small businesses getting started',
      features: [
        'Up to 50 quotations/month',
        'Basic customer management',
        'PDF export',
        'Email support',
        '2 user accounts',
        'Basic templates',
      ],
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#f3f4f6"/><path d="M16 10v12" stroke="#a855f7" strokeWidth="2" strokeLinecap="round"/></svg>
      ),
      button: 'Get Started',
      highlight: false
    },
    {
      name: 'Professional',
      price: '₹2,499',
      desc: 'Ideal for growing businesses',
      features: [
        'Up to 200 quotations/month',
        'Advanced customer management',
        'PDF & Web link export',
        'Priority email support',
        '5 user accounts',
        'Custom templates',
        'Margin analysis',
        'Product catalog management',
      ],
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#f3f4f6"/><path d="M16 10l5 12-5-5-5 5 5-12z" fill="#6c47ff"/></svg>
      ),
      button: 'Get Started',
      highlight: true
    },
    {
      name: 'Enterprise',
      price: '₹4,999',
      desc: 'For large teams and enterprises',
      features: [
        'Unlimited quotations',
        'Complete CRM integration',
        'All export formats',
        'Phone & email support',
        'Unlimited user accounts',
        'White-label templates',
        'Advanced analytics',
        'API access',
        'Custom integrations',
        'Dedicated account manager',
      ],
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#f3f4f6"/><path d="M16 10l5 12-5-5-5 5 5-12z" fill="#181c2a"/></svg>
      ),
      button: 'Contact Sales',
      highlight: false
    }
  ];

  return (
    <div className="landing-root">
      <div className="container-95">
        <Navbar />
        <div className="pricing-section">
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
            {plans.map((plan, idx) => (
              <div key={plan.name} className={`pricing-card${plan.highlight ? ' popular' : ''}`}>
                {plan.highlight && (
                  <div className="pricing-popular-badge">Most Popular</div>
                )}
                <div className="pricing-icon">{plan.icon}</div>
                <div className="pricing-title">{plan.name}</div>
                <div className="pricing-desc">{plan.desc}</div>
                <div className="pricing-amount">{plan.price}<span className="pricing-per">/month</span></div>
                <ul className="pricing-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button className={`view-pricing-btn${plan.button === 'Contact Sales' ? ' pricing-secondary-btn' : ''}`}>{plan.button}</button>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
} 