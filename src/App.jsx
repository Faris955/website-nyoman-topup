import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Scripts from "./Components/scripts";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import GameList from "./Components/Gamelist";
import AboutSection from "./Components/About";
import Footer from "./Components/Footer";
import GameDetail from "./Components/GameDetail";

function App() {
  return (
    <Router>
      <>
        <Scripts />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <GameList />
                <AboutSection />
              </>
            }
          />
          <Route path="/game/:id" element={<GameDetail />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
