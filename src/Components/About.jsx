import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <h2 className="section-title orbitron fade-in">
          Why Choose GameBoost Store?
        </h2>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="feature-card fade-in">
              <i className="bi bi-lightning-charge feature-icon"></i>
              <h5>Lightning Fast</h5>
              <p>Instant delivery within seconds. No waiting, just gaming!</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="feature-card fade-in">
              <i className="bi bi-shield-check feature-icon"></i>
              <h5>100% Secure</h5>
              <p>Safe and trusted transactions with encrypted payments.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="feature-card fade-in">
              <i className="bi bi-currency-dollar feature-icon"></i>
              <h5>Best Prices</h5>
              <p>Competitive pricing with frequent discounts and promotions.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="feature-card fade-in">
              <i className="bi bi-headset feature-icon"></i>
              <h5>24/7 Support</h5>
              <p>Round-the-clock customer support for all your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
