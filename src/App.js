// React-React DOM
import { Fragment, React } from "react";
// Router
import { Routes, Route } from "react-router-dom";
// Components
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import ManageInventories from "./components/Manage Inventories/ManageInventories";
function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/manageinventories" element={<ManageInventories />} />
      </Routes>
    </Fragment>
  );
}

export default App;
