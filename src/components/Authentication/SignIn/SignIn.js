// React-React DOM
import React, { useState } from "react";

// Components
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Utilities/Loading/Loading";
// Firebase
import auth from "../Firebase/firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { useAuthState } from "react-firebase-hooks/auth";
// Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Routing
import { useNavigate, useLocation, Link } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  // React Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Firebase Hooks
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const [userInfo] = useAuthState(auth);
  //   Handle Form
  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    e.target.reset();
  };
  // Redirect The page
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    // Generate token
    fetch("https://dominate.onrender.com/login", {
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
    <section className="text-gray-600 body-font">
      <form
        onSubmit={handleSignIn}
        className="px-16 py-24 lg:w-1/2 w-full mx-auto"
      >
        <div className=" bg-gray-100 rounded-lg p-8  mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign In
          </h2>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email(test@gmail.com)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              Password(123456789)
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <p className="text-red-700">{error?.message}</p>
          <div className="flex items-center justify-between mt-3 mb-5">
            <input
              type="submit"
              value="Sign In"
              className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg cursor-pointer"
            />
            <p
              onClick={async () => {
                if (!email) {
                  toast("Please Insert email");
                } else {
                  await sendPasswordResetEmail(email);
                  toast("Reset link send to your email");
                }
              }}
              className="inline-block align-baseline font-bold text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              Reset Password?
            </p>
          </div>
          <p className="text-center text-md font-medium">
            Don't have an account?
            <Link to="/signup" className="font-bold text-md text-indigo-600">
              Create
            </Link>
          </p>
        </div>
        <SocialLogin />
      </form>
    </section>
  );
};

export default SignIn;
