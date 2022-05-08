import React from "react";

const Stats = () => {
  return (
    <div className="xl:px-16 px-6 pt-16 xl:mx-auto xl:container">
      <h1 className="xl:text-5xl font-bold md:text-4xl text-2xl  leading-tight text-center text-gray-800 sm:mb-0 mb-12">
        More Than 10 Years We Provide Cars <br className="md:block hidden" />
        around the world
      </h1>
      <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
        <img
          src="https://i.ibb.co/WD30X0v/map.png"
          alt="world map image"
          className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden"
        />
        <img
          src="https://i.ibb.co/tD48GQt/map-bg.png"
          alt="mobile-image"
          className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0"
        />
        <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative   sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
          <p className="text-3xl font-semibold text-gray-800">800+</p>
          <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
            Recently Car Listed
          </p>
        </div>
        <div className="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative   sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
          <p className="text-3xl font-semibold text-gray-800">600+</p>
          <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
            Active Listening
          </p>
        </div>
        <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative  md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
          <p className="text-3xl font-semibold text-gray-800">250+</p>
          <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
            Recently Sold
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
