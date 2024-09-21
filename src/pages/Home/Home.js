import React from "react";
import Movies from "../Movies/Movies";
import HeroSection from "../../pages/heroSection/HeroSection";

const Home = () => {
  return (
    <div className="home-page bg-[#110F18]">
      <HeroSection />
      <Movies />
    </div>
  );
};

export default Home;
