// React-ReactDOM
import React from "react";
// Firebase
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.init";
// BrowserRouter
import { useLocation, useNavigate } from "react-router-dom";
// Components
import Loading from "../../Utilities/Loading/Loading";
const SocialLogin = () => {
  // Firebase Hook
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [userInfo] = useAuthState(auth);
  // Router
  const navigate = useNavigate();
  //Re direct to page
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    // Generate token
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userInfo.email }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.token);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <div className="flex content-center my-8">
        <div className="bg-green-500 w-1/2 h-0.5"></div>
        <p className="font-bold px-2 -mt-4 text-xl">or</p>
        <div className="bg-green-500 w-1/2 h-0.5"></div>
      </div>
      <div className="mt-1">
        <button
          onClick={() => signInWithGoogle()}
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-8 rounded focus:outline-none focus:shadow-outline flex content-center  mx-auto mb-2"
        >
          <img
            src="https://i.ibb.co/Ng07Wfz/google.png"
            alt="google"
            className="w-6"
          />
          <span className="px-2">Sign In With Google</span>
        </button>
      </div>
    </section>
  );
};

export default SocialLogin;
