import React from "react";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Discover from "./components/Discover";
import Marquee from "./components/Marquee";
import ImageSlider from "./components/ImageSlider";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="font-sans">
      <Navbar/>
      <Landing/>
      <Discover/>
      <Marquee/>
      <ImageSlider/>
      <Portfolio/>
    </div>
  );
}

export default App;
