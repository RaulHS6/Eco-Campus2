import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Calculadora from "./pages/Calculadora";
import Mapa from "./pages/Mapa";
import Comunidad from "./pages/Comunidad";
import GuiaReciclaje from "./pages/GuiaReciclaje";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/guia-reciclaje" element={<GuiaReciclaje />} />
      </Routes>
    </Router>
  );
}

export default App;
