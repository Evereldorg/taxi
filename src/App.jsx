// src/App.jsx

import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FleetSection from './components/FleetSection';
import NewSection from "./components/NewSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-gray-100">
      <Navbar />
      <HeroSection />
      <FleetSection />
      <AboutSection />
      <NewSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
