import React from "react";
import { useNavigate } from "react-router-dom";

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

const GameList = () => {
  const navigate = useNavigate();

  const handleGameClick = (gameId) => {
    navigate(`/game/${gameId}`);
  };

  return (
    <section id="games" className="section-padding">
      <div className="container">
        <h2 className="section-title orbitron fade-in">Popular Games</h2>
        <div className="row g-4">
          {games.map((game) => (
            <div key={game.id} className="col-lg-3 col-md-6">
              <div
                className="game-card fade-in"
                onClick={() => handleGameClick(game.id)}
                style={{ cursor: "pointer" }}
              >
                <img src={game.image} className="w-100" alt={game.name} />
                <div className="game-card-body">
                  <h5 className="game-title">{game.name}</h5>
                  <p className="game-description">{game.description}</p>
                  <button className="btn btn-neon w-100">Top Up Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameList;
