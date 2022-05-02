// React-React DOM
import React, { useEffect, useState } from "react";
// Custom Hooks
import useLoadData from "../useHook/useLoadData";
// Components
import Card from "../Utilities/Card/Card";
const Inventory = () => {
  // Load data from custom hook
  const [cars, setCars] = useLoadData();

  return (
    <section className="px-16 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        {cars.map((car) => (
          <Card key={car._id} carInfo={car} />
        ))}
      </div>
    </section>
  );
};

export default Inventory;
