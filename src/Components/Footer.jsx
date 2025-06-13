import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h5 className="orbitron mb-3">
              <i className="bi bi-controller me-2"></i>GameBoost Store
            </h5>
            <p className="text-secondary">
              Your trusted partner for game top-ups. Fast, secure, and reliable
              service for gamers worldwide.
            </p>
          </div>
          <div className="col-lg-6 text-lg-end">
            <h6 className="mb-3">Follow Us</h6>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-link">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="bi bi-discord"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4" style={{ borderColor: "rgba(255,255,255,0.1)" }} />
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-secondary mb-0">
              &copy; 2024 GameBoost Store. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
