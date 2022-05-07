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
import PageNotFound from "./components/PageNotFound/PageNotFound";
import SignIn from "./components/Authentication/SignIn/SignIn";
import SignUp from "./components/Authentication/SignUp/SignUp";
import MyAddCars from "./components/MyAddCars/MyAddCars";
import Footer from "./components/Footer/Footer";
import RequireAuth from "./components/Authentication/RequireAuth/RequireAuth";
function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/manageinventories" element={<ManageInventories />} />
        <Route
          path="/addcar"
          element={
            <RequireAuth>
              <AddCars />
            </RequireAuth>
          }
        />
        <Route
          path="/managecar/:id"
          element={
            <RequireAuth>
              <ManageCar />
            </RequireAuth>
          }
        />
        <Route path="/myaddcars" element={<MyAddCars />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
}

export default App;
