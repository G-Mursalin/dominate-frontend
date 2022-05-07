// React-React DOM
import React, { useState } from "react";
// Custom Hooks
import useLoadData from "../useHook/useLoadData";
// Components
import Table from "../Utilities/Table/Table";
import { Link } from "react-router-dom";
import Loading from "../Utilities/Loading/Loading";
const ManageInventories = () => {
  const [loading, setLoading] = useState(true);
  // Load data from custom hook
  const [cars, setCars] = useLoadData();
  //Handle Delete UI
  const handleDeleteUI = (id) => {
    setCars((prevData) => prevData.filter((val) => val._id !== id));
  };

  setTimeout(() => {
    setLoading(false);
  }, 600);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="my-24">
      <div className="text-center">
        <Link
          to="/addcar"
          className="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded"
        >
          Add Cars&nbsp;&rarr;
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md py-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Car name
              </th>
              <th scope="col" className="px-6 py-3">
                Available Car
              </th>
              <th scope="col" className="px-6 py-3">
                Supplier Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          {cars.map((car) => (
            <Table
              key={car._id}
              carInfo={car}
              handleDeleteUI={handleDeleteUI}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageInventories;
