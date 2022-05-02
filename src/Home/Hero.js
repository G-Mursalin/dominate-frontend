// React-React DOM
import React from "react";

const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse px-16 py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full px-16 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://i.ibb.co/GP43NR0/header-img.jpg"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 pt-8">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
            <span className="text-green-500 block">
              Attract,Engage, and Convert
            </span>
            <span className="my-3 block italic">more</span>
            <span className="inline-block text-deep-purple-accent-400 block">
              Qualified Vehicles
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Welcome to DOMINATE! Find information on all vehicles, services,
            dealers in your area and everything about the cars right here.
          </p>
          <div className="flex items-center">
            <a
              href="/"
              class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              See Cars&nbsp;&rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
