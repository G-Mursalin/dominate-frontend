// React React DOM
import React, { useState, useEffect } from "react";
// Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Authentication/Firebase/firebase.init";
// Components
import Card from "../Utilities/Card/Card";
import Loading from "../Utilities/Loading/Loading";
// Routing
import { Link } from "react-router-dom";
const MyAddCars = () => {
  // React Hook
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // Firebase
  const [user] = useAuthState(auth);
  //Get Data from server
  useEffect(() => {
    setLoading(true);
    const getMyCars = async () => {
      const email = user?.email;
      const res = await fetch(`http://localhost:5000/mycars?email=${email}`);
      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    getMyCars();
  }, [user]);

  if (!data.length) {
    return (
      <div className=" px-16 md:text-2xl  text-base  flex justify-center items-center w-full h-screen">
        <div>
          You don't add any car items.Please
          <Link
            class="text-green-500 background-transparent font-bold px-3 py-1  outline-none focus:outline-none mr-1 mb-1 underline"
            to="/addcar"
          >
            add once.
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="px-16 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        {data.map((car) => (
          <Card key={car._id} carInfo={car} />
        ))}
      </div>
    </section>
  );
};

export default MyAddCars;
