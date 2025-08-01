import React from "react";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Discover from "./components/Discover";
import Marquee from "./components/Marquee";
import ImageSlider from "./components/ImageSlider";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar/>
      <Landing/>
      <Discover/>
      <Marquee/>
      <ImageSlider/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <BackToTopButton/>
    </div>
  );
}

export default App;
