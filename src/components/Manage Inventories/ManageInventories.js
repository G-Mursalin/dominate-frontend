// React-React DOM
import React from "react";
// Custom Hooks
import useLoadData from "../useHook/useLoadData";
// Components
import Table from "../Utilities/Table/Table";
const ManageInventories = () => {
  // Load data from custom hook
  const [cars, setCars] = useLoadData();
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md py-20">
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
            <Table key={car._id} carInfo={car} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageInventories;
