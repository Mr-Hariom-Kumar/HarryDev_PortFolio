import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./section/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Projects from "./section/Projects";
import Experiences from "./section/Experiences";
import Testimonial from "./section/Testimonial";
import Contact from "./section/Contact";
import Footer from "./section/Footer";
import ResumePage from "./components/ResumePage";

const HomePage = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/resume" element={<ResumePage />} />
    </Routes>
  );
};

export default App;