import React from "react";
import BannerSlider from "./Banner/BannerSlider";

import "./Home.css";
import HomeServices from "./HomeServices/HomeServices";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <HomeServices />
    </div>
  );
};

export default Home;
