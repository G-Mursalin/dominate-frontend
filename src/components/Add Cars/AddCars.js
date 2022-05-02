// React-React DOM
import React from "react";
// React Tostify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddCars = () => {
  // Form handle an send data to server

  const handleForm = (e) => {
    e.preventDefault();
    // Collect data
    const carDetails = {
      name: e.target.carName.value,
      img: e.target.imgUrl.value,
      price: e.target.price.value,
      description: e.target.description.value,
      available: e.target.numberOfCar.value,
      supplierName: e.target.supplierName.value,
    };

    // Send data to server
    fetch("http://localhost:5000/addcar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        toast("Car Added Successfully 😃");
      });
  };
  return (
    <form onSubmit={handleForm} className="text-gray-600 body-font relative">
      <div className="container px-5 pt-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Add New Car
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="carName"
                  className="leading-7 text-sm text-gray-600"
                >
                  Car name
                </label>
                <input
                  type="text"
                  id="carName"
                  name="carName"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="price"
                  className="leading-7 text-sm text-gray-600"
                >
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="imgURL"
                  className="leading-7 text-sm text-gray-600"
                >
                  Img URL
                </label>
                <input
                  type="text"
                  id="imgURL"
                  name="imgUrl"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="quantity"
                  className="leading-7 text-sm text-gray-600"
                >
                  Number of car
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="numberOfCar"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="supplierName"
                  className="leading-7 text-sm text-gray-600"
                >
                  Supplier Name
                </label>
                <input
                  type="text"
                  id="supplierName"
                  name="supplierName"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Description
                </label>
                <textarea
                  id="message"
                  name="description"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <input
                type="submit"
                value="Add Car"
                className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddCars;
