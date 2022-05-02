// React-React DOM
import React from "react";
// Custom Hooks
import useLoadData from "../useHook/useLoadData";
const ManageInventories = () => {
  // Load data from custom hook
  const [cars, setCars] = useLoadData();
  return <div>ManageInventories {cars.length}</div>;
};

export default ManageInventories;
