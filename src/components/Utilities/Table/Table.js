// React-React DOM
import React from "react";
// Modal
import Modal from "react-modal";
// Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Authentication/Firebase/firebase.init";
// React Toast
import { toast } from "react-toastify";
// Routing
import { useNavigate } from "react-router-dom";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const Table = (props) => {
  const { name, price, available, supplierName, _id } = props.carInfo;
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  // Handel Delete Functionality
  const handelDelete = () => {
    fetch(`http://localhost:5000/car/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === "Delete successfully") {
          toast("Delete successfully");
          props.handleDeleteUI(_id);
        } else {
          navigate("/unauthorizeaccess");
        }
      });
  };
  //   Modal
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
    subtitle.style.fontSize = "20px";
    subtitle.style.padding = "20px";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
        >
          {name}
        </th>
        <td className="px-6 py-4">{+available ? available : "Sold Out"}</td>
        <td className="px-6 py-4">{supplierName}</td>
        <td className="px-6 py-4">${price}</td>
        <td className="px-6 py-4 text-right">
          <button
            onClick={() => {
              openModal();
            }}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Delete
          </button>
        </td>
      </tr>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          Are you sure? You want to delete? (It will also delete from your
          database)
        </h2>
        <div className="flex w-100 justify-between">
          <button
            onClick={() => {
              handelDelete();
              closeModal();
            }}
            className="inline-flex text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded text-lg"
          >
            Delete
          </button>
          <button
            onClick={closeModal}
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            close
          </button>
        </div>
      </Modal>
    </tbody>
  );
};

export default Table;
