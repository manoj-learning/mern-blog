import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import Slider from "../parts/Slider";
import TrendingPosts from "../parts/TrendingPosts";
import FreshStories from "../parts/FreshStories";

const home = () => {
  return (
    <>
      <Header />
      <Slider />
      <TrendingPosts />
      <FreshStories />
      Bye
      <Footer />
    </>
  );
};

export default home;
