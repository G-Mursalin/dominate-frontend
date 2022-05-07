// React React-DOM
import React, { useState } from "react";
// Routing
import { Link, NavLink } from "react-router-dom";
// Components
import Inventory from "./../Inventory/Inventory";
// Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Authentication/Firebase/firebase.init";
import { signOut } from "firebase/auth";
import { Fragment } from "react";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Firebase Hook
  const [user] = useAuthState(auth);
  return (
    <nav className="bg-gray-900 px-16 py-3 mx-auto fixed z-10 top-0 w-full">
      <div className="">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-8"
            >
              <svg
                className="w-8 text-teal-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="#22c55e"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Dominate
              </span>
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <NavLink
                  to="/inventory"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#22c55e" : "",
                    };
                  }}
                  aria-label="Our product"
                  className="font-medium tracking-wide text-gray-200  transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Inventory
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/manageinventories"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#22c55e" : "",
                    };
                  }}
                  aria-label="Our product"
                  className="font-medium tracking-wide text-gray-200  transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Manage Inventories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addcar"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#22c55e" : "",
                    };
                  }}
                  aria-label="Our product"
                  className="font-medium tracking-wide text-gray-200  transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Add Car
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {user ? (
              <li>
                <p
                  aria-label="Sign Out"
                  onClick={() => signOut(auth)}
                  title="Sign Out"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 cursor-pointer py-3"
                >
                  Sign Out
                </p>
              </li>
            ) : (
              <Fragment>
                <li>
                  <NavLink
                    to="/signin"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#22c55e" : "",
                      };
                    }}
                    aria-label="Sign in"
                    title="Sign in"
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Sign in
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signup"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#22c55e" : "",
                      };
                    }}
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Sign up
                  </NavLink>
                </li>
              </Fragment>
            )}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          DOMINATE
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/inventory"
                          onClick={() => setIsMenuOpen(false)}
                          aria-label="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Inventory
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/manageinventories"
                          onClick={() => setIsMenuOpen(false)}
                          aria-label="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Manage Inventory
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/addcar"
                          onClick={() => setIsMenuOpen(false)}
                          aria-label="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Add Car
                        </Link>
                      </li>
                      {user ? (
                        <li>
                          <p
                            aria-label="Sign Out"
                            onClick={() => signOut(auth)}
                            title="Sign Out"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Sign Out
                          </p>
                        </li>
                      ) : (
                        <Fragment>
                          <li>
                            <Link
                              to="/signin"
                              onClick={() => setIsMenuOpen(false)}
                              aria-label="Our product"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Sign In
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/signup"
                              onClick={() => setIsMenuOpen(false)}
                              aria-label="Our product"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Sign Up
                            </Link>
                          </li>
                        </Fragment>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
