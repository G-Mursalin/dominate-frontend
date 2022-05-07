// React
import React from "react";
// Firebase Hook
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../Firebase/firebase.init";
const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return (
      <p className="text-2xl w-full h-screen flex justify-center items-center ">
        Loading....
      </p>
    );
  }
  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  //   if (user.providerData[0].providerId === "password" && !user.emailVerified) {
  //     return <p className="text-9xl">Please Verify Your email</p>;
  //   }

  return children;
};

export default RequireAuth;
