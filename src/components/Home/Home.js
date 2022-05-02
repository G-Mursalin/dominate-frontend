// React-React DOM
import React from "react";
import { Fragment } from "react";
// Components
import Hero from "./Hero/Hero";
import OnlyForYou from "./OnlyForYou/OnlyForYou";
const Home = () => {
  return (
    <Fragment>
      <Hero />
      <OnlyForYou />
    </Fragment>
  );
};

export default Home;
