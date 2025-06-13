import React from "react";
import { useParams } from "react-router-dom";

// Import games data from GameList
const games = [
  {
    id: 1,
    name: "Mobile Legends",
    description: "Get diamonds instantly for Mobile Legends Bang Bang",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Free Fire",
    description: "Purchase diamonds for Garena Free Fire",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=200&fit=crop",
  },
  {
    id: 3,
    name: "PUBG Mobile",
    description: "Buy UC for PUBG Mobile at best prices",
    image:
      "https://images.unsplash.com/photo-1606503153255-59d8b8b13ba9?w=400&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Genshin Impact",
    description: "Purchase Genesis Crystals for Genshin Impact",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Call of Duty Mobile",
    description: "Get CP (Call of Duty Points) instantly",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=200&fit=crop",
  },
  {
    id: 6,
    name: "Valorant",
    description: "Purchase Valorant Points for skins and agents",
    image:
      "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=200&fit=crop",
  },
  {
    id: 7,
    name: "League of Legends",
    description: "Buy Riot Points for champions and skins",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop",
  },
  {
    id: 8,
    name: "Clash of Clans",
    description: "Get gems for faster upgrades and resources",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
  },
  {
    id: 9,
    name: "Fortnite",
    description: "Purchase V-Bucks for Battle Royale items",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop",
  },
  {
    id: 10,
    name: "Roblox",
    description: "Buy Robux for avatar items and game passes",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop",
  },
  {
    id: 11,
    name: "Apex Legends",
    description: "Get Apex Coins for legends and cosmetics",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop",
  },
  {
    id: 12,
    name: "Minecraft",
    description: "Purchase Minecoins for marketplace content",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=200&fit=crop",
  },
];

const GameDetail = () => {
  const { id } = useParams();
  const game = games.find((g) => g.id === parseInt(id));

  // Mock product data - in a real app, this would come from an API
  const products = [
    { id: 1, name: "60 Diamonds", price: "$0.99" },
    { id: 2, name: "310 Diamonds", price: "$4.99" },
    { id: 3, name: "520 Diamonds", price: "$9.99" },
    { id: 4, name: "1060 Diamonds", price: "$19.99" },
    { id: 5, name: "2180 Diamonds", price: "$39.99" },
    { id: 6, name: "5600 Diamonds", price: "$99.99" },
  ];

  if (!game) {
    return (
      <div className="container mt-5 pt-5">
        <h2 className="text-center">Game not found</h2>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="game-detail-hero d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content fade-in">
                <h1 className="hero-title orbitron">{game.name}</h1>
                <p className="hero-subtitle">
                  Get instant top-up for {game.name}. Safe, fast, and reliable
                  service guaranteed.
                </p>
                <a href="#products" className="btn btn-neon">
                  View Packages
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="game-hero-image fade-in">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-100 rounded-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="products" className="section-padding">
        <div className="container">
          <h2 className="section-title orbitron text-center fade-in">
            Choose Your Package
          </h2>
          <div className="row g-4">
            {products.map((product) => (
              <div key={product.id} className="col-lg-4 col-md-6">
                <div className="product-card fade-in">
                  <div className="product-card-body">
                    <h4 className="product-title">{product.name}</h4>
                    <p className="product-price">{product.price}</p>
                    <button className="btn btn-neon w-100">Purchase Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="purchase-form" className="section-padding bg-dark">
        <div className="container">
          <h2 className="section-title orbitron text-center fade-in">
            Complete Your Purchase
          </h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form className="purchase-form fade-in">
                <div className="mb-3">
                  <label htmlFor="userId" className="form-label">
                    User ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userId"
                    placeholder="Enter your game ID"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="serverID" className="form-label">
                    Server ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="serverID"
                    placeholder="Enter your server ID"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="package" className="form-label">
                    Select Package
                  </label>
                  <select className="form-select" id="package" required>
                    <option value="">Choose a package</option>
                    {products.map((product) => (
                      <option key={product.id} value={product.id}>
                        {product.name} - {product.price}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="paymentMethod" className="form-label">
                    Payment Method
                  </label>
                  <select className="form-select" id="paymentMethod" required>
                    <option value="">Select payment method</option>
                    <option value="creditCard">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bankTransfer">Bank Transfer</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-neon w-100">
                  Proceed to Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Reusing the existing AboutSection component */}
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
                <p>
                  Competitive pricing with frequent discounts and promotions.
                </p>
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
    </>
  );
};

export default GameDetail;
