import React from "react";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection"; 
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/Footer"; 

import "./App.css";

function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Navbar, null),
    React.createElement(ProfileCard, null),
    React.createElement(AboutSection, null),
    React.createElement(SkillsSection, null),
    React.createElement(PortfolioSection, null),
    React.createElement(ContactSection, null),
    React.createElement(FooterSection, null) 
  );
}

export default App;
