import React from "react";
import Hero from "../../components/Hero/Hero";
import { heroOne, heroTwo, heroThree } from "../../data/homeData";
import Content from "../../components/Content/Content";
import Pricing from "../../components/Pricing/Pricing";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Pricing />
      <Footer />
    </>
  );
};

export default HomePage;
