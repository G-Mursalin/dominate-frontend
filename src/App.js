// React-React DOM
import { Fragment, React } from "react";
// Router
import { Routes, Route } from "react-router-dom";
// React Tostify
import { ToastContainer } from "react-toastify";
// Components
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import ManageInventories from "./components/Manage Inventories/ManageInventories";
import AddCars from "./components/Add Cars/AddCars";
import ManageCar from "./components/Manage Car/ManageCar";
function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/manageinventories" element={<ManageInventories />} />
        <Route path="/addcar" element={<AddCars />} />
        <Route path="/managecar/:id" element={<ManageCar />} />
      </Routes>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
