// React React DOM
import React, { useState, useEffect } from "react";
// Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Authentication/Firebase/firebase.init";
// Components
import Card from "../Utilities/Card/Card";
import Loading from "../Utilities/Loading/Loading";

// Routing
import { Link, useNavigate } from "react-router-dom";

// Modal
import Modal from "react-modal";
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
const MyAddCars = () => {
  // React Hook
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(null);
  // Firebase
  const [user] = useAuthState(auth);
  // Routing
  const navigate = useNavigate();
  //Get Data from server
  useEffect(() => {
    setLoading(true);
    const getMyCars = async () => {
      const email = user?.email;
      const res = await fetch(
        `https://dominate.onrender.com/mycars?email=${email}`
      );
      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    getMyCars();
  }, [user]);
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
  //   Handle Delete Item
  const handelDelete = () => {
    fetch(`https://dominate.onrender.com/car/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === "Delete successfully") {
          setData((prevData) => prevData.filter((val) => val._id !== id));
        } else {
          navigate("/unauthorizeaccess");
        }
      });
  };

  if (loading) {
    return <Loading />;
  }
  if (!data.length) {
    return (
      <div className=" px-16 md:text-2xl  text-base  flex justify-center items-center w-full h-screen">
        <div>
          You don't add any car items.Please
          <Link
            className="text-green-500 background-transparent font-bold px-3 py-1  outline-none focus:outline-none mr-1 mb-1 underline"
            to="/addcar"
          >
            add once.
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="px-16 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        {data.map((car) => (
          <Card key={car._id} carInfo={car}>
            <button
              onClick={() => {
                openModal();
                setId(car._id);
              }}
              className="inline-flex items-center justify-center text-white bg-green-500 border-0 py-2 px-6 mt-3 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Delete
            </button>
          </Card>
        ))}
      </div>
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
    </section>
  );
};

export default MyAddCars;
