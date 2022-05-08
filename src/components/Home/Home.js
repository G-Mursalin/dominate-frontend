// React-React DOM
import React from "react";
import { Fragment } from "react";
// Components
import Hero from "./Hero/Hero";
import OnlyForYou from "./OnlyForYou/OnlyForYou";
import Stats from "../Stats/Stats";
import Wpb from "../Wpb/Wpb";
const Home = () => {
  return (
    <Fragment>
      <Hero />
      <OnlyForYou />
      <Stats />
      <Wpb />
    </Fragment>
  );
};

export default Home;
