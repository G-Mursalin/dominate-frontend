import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { name, img, price, description, available, supplierName, _id } =
    props.carInfo;

  return (
    <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
      <div className="relative w-full h-50">
        <img src={img} alt={name} />
      </div>
      <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
        <div>
          <p className="text-2xl font-bold  font-semibold">{name}</p>
          <p>Price: ${price}</p>
          <p className="text-sm text-gray-900 my-8">{description}</p>
          {!available ? (
            <p className=" text-red-700">This Car Sold Out</p>
          ) : (
            <p>Available Car: {available}</p>
          )}
          <p> Supplier Name: {supplierName}</p>
        </div>
        <Link
          to={`/managecar/${_id}`}
          className="inline-flex items-center justify-center text-white bg-green-500 border-0 py-2 px-6 mt-5 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          Stock Update
        </Link>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
