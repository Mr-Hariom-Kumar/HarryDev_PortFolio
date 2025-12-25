import React from "react";
import Navbar from "./section/navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Projects from "./section/Projects";
import Experiences from "./section/Experiences";
// import Hero from "./sections/Hero";
// import About from "./sections/About";
// import Projects from "./sections/Projects";
// import Experiences from "./sections/Experiences";
// import Testimonial from "./sections/Testimonial";
// import Contact from "./sections/Contact";
// import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About/>
      <Projects />
      <Experiences />
      <section className="min-h-screen"></section>
      {/* <Hero />
      <Testimonial />
      <Contact />
      <Footer/> */}
    </div>
  );
};

export default App;