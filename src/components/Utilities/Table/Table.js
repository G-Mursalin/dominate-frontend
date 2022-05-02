import React from "react";

const Table = (props) => {
  const { name, price, available, supplierName, _id } = props.carInfo;
  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
        >
          {name}
        </th>
        <td className="px-6 py-4">{available}</td>
        <td className="px-6 py-4">{supplierName}</td>
        <td className="px-6 py-4">${price}</td>
        <td className="px-6 py-4 text-right">
          <button
            onClick={() => {
              console.log(_id);
            }}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Table;
