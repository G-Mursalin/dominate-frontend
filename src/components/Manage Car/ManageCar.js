// React React DOM
import React, { useState, useEffect } from "react";
// Routing
import { useParams } from "react-router-dom";
const ManageCar = () => {
  //Get if from URL
  const { id } = useParams();
  const [car, setCar] = useState([]);
  // Load one data using id
  useEffect(() => {
    fetch(`http://localhost:5000/car/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);

  return <div className="mt-96">ManageCar {car.name}</div>;
};

export default ManageCar;
