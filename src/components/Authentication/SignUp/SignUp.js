// React-React DOM
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Components
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Utilities/Loading/Loading";
// Routing
import { useNavigate } from "react-router-dom";
// Firebase
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
const SignUp = () => {
  const navigate = useNavigate();
  // Firebase Hooks
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  // React Hook
  const [agree, setAgree] = useState(true);
  const [userInfo] = useAuthState(auth);
  //   Form Handler
  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      e.target.email.value,
      e.target.password.value
    );
    e.target.reset();
  };

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
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <section className="text-gray-600 body-font">
      <form
        onSubmit={handleSignUp}
        className="px-16 py-24 lg:w-1/2 w-full mx-auto"
      >
        <div className=" bg-gray-100 rounded-lg p-8  mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="mb-4">
            <input
              onClick={() => setAgree(!agree)}
              type="checkbox"
              name="terms"
              id="terms"
            />
            <label
              htmlFor="terms"
              className={`pl-2 ${agree ? "text-red-600" : ""}`}
            >
              Accept Terms and Conditions
            </label>
          </div>
          <div className="flex items-center justify-between mt-2 mb-5">
            <input
              type="submit"
              value="Sign Up"
              disabled={agree}
              className={`text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg cursor-pointer ${
                agree ? "cursor-not-allowed" : ""
              }`}
            />
            <p className="text-center text-md font-medium">
              Already have an account?
              <Link to="/signin" className="font-bold text-md text-indigo-600">
                Login
              </Link>
            </p>
          </div>
        </div>
        <SocialLogin />
      </form>
    </section>
  );
};

export default SignUp;
