import React from "react";
import Movies from "../Movies/Movies";
import HeroSection from "../heroSection/HeroSection";

const Home = () => {
  return (
    <div className="bg-[#110F18]">
      <HeroSection />
      <Movies />
    </div>
  );
};

export default Home;
