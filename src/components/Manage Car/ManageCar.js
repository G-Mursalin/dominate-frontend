// React React DOM
import React, { useState, useEffect } from "react";
// Routing
import { Link, useParams, useNavigate } from "react-router-dom";
// React Tostify
import { toast } from "react-toastify";
// Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Authentication/Firebase/firebase.init";

const ManageCar = () => {
  //Get if from URL
  const { id } = useParams();
  const [car, setCar] = useState({});
  // Firebase Hook
  const [user] = useAuthState(auth);
  // Routing
  const navigate = useNavigate();
  const updatedData = (data, status) => {
    fetch(`https://dominate.onrender.com/car/${id}`, {
      method: "PUT",
      headers: {
        authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === "Unauthorize Access") {
          navigate("/unauthorizeaccess");
        } else {
          toast(`${status} successfully`);
        }
      });
  };

  //Handle Restock
  const handleRestock = (e) => {
    e.preventDefault();
    const finalCarNumber =
      parseInt(car.available) + parseInt(e.target.carNumber.value);
    const carUpdate = {
      available: finalCarNumber,
    };
    setCar((preData) => {
      return {
        ...preData,
        available: finalCarNumber,
      };
    });
    // Send to server
    updatedData(carUpdate, "Re-stock");
    e.target.reset();
  };
  //Handle Car Delivered
  const handleDeliver = (operation) => {
    let carUpdate;
    if (+car.available === 0) return;
    if (operation === "-") {
      carUpdate = { available: car.available - 1 };
      setCar((preData) => {
        return { ...preData, available: car.available - 1 };
      });
    }
    // Send Data to server
    updatedData(carUpdate, "Delivered");
  };
  // Load one data using id
  useEffect(() => {
    fetch(`https://dominate.onrender.com/car/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={car.img}
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Car Name: {car.name}
                </h2>
                <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                <p className="text-base">Price: ${car.price}</p>
                <p className="text-base my-2">
                  Supplier Name: {car.supplierName}
                </p>
                <p className="text-base flex justify-center">
                  <span className="mr-2"> Available Car:</span>
                  <span className="text-lg font-bold">{car.available}</span>
                </p>
                {+car.available === 0 ? (
                  <p className="text-base flex justify-center">
                    <span className="my-2 text-red-700">This Car Sold Out</span>
                  </p>
                ) : (
                  ""
                )}
                <button
                  to="inventory"
                  onClick={() => handleDeliver("-")}
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                >
                  Delivered This Car&nbsp;&rarr;
                </button>
                <div className="mt-5">
                  <Link
                    to="/manageinventories"
                    className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                  >
                    Manage Inventories&nbsp;&rarr;
                  </Link>
                </div>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <form
                onSubmit={handleRestock}
                className="text-gray-600 body-font relative"
              >
                <div className="container px-5 mx-auto">
                  <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                      Re-stock The Car
                    </h1>
                  </div>
                  <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            htmlFor="carNumber"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Put a number
                          </label>
                          <input
                            type="number"
                            id="carNumber"
                            name="carNumber"
                            min={1}
                            required
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <input
                          type="submit"
                          value="Add To Stock"
                          className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageCar;
