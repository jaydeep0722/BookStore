import React from "react";
import Banner from "../components/Home/Banner";
import TopSellers from "../components/Home/TopSellers";
import News from "../components/Home/News";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopSellers />
      <News />
    </div>
  );
};

export default Home;
