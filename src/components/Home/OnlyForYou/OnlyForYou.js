// React-React DOM
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Custom Hooks
import useLoadData from "../../useHook/useLoadData";
// Components
import Card from "../../Utilities/Card/Card";

const OnlyForYou = () => {
  // Load data from custom hook
  const [cars, setCars] = useLoadData(6);

  return (
    <section className="px-16 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <h1 className="text-5xl text-center font-bold pb-16">Only For You</h1>
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        {cars.map((car) => (
          <Card key={car._id} carInfo={car} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/manageinventories"
          className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
        >
          Manage Inventories&nbsp;&rarr;
        </Link>
      </div>
    </section>
  );
};

export default OnlyForYou;
