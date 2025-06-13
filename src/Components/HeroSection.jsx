import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 hero-content">
            <h1 className="hero-title orbitron fade-in">
              Level Up Your Gaming
            </h1>
            <p className="hero-subtitle fade-in">
              Fast, secure, and reliable game top-ups for all your favorite
              games. Get instant delivery and the best prices guaranteed.
            </p>
            <div className="fade-in">
              <a href="#games" className="btn btn-neon me-3">
                Explore Games
              </a>
              <a href="#about" className="btn btn-outline-light">
                Learn More
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              id="heroCarousel"
              className="carousel slide fade-in"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="position-relative">
                    <img
                      src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop"
                      className="d-block w-100"
                      alt="Gaming Banner 1"
                    />
                    <div className="carousel-overlay"></div>
                    <div className="carousel-caption">
                      <h5>50% OFF</h5>
                      <p>Special promotion for new users!</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="position-relative">
                    <img
                      src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop"
                      className="d-block w-100"
                      alt="Gaming Banner 2"
                    />
                    <div className="carousel-overlay"></div>
                    <div className="carousel-caption">
                      <h5>INSTANT DELIVERY</h5>
                      <p>Get your diamonds in seconds!</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="position-relative">
                    <img
                      src="https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&h=400&fit=crop"
                      className="d-block w-100"
                      alt="Gaming Banner 3"
                    />
                    <div className="carousel-overlay"></div>
                    <div className="carousel-caption">
                      <h5>24/7 SUPPORT</h5>
                      <p>We're here to help anytime!</p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
