import React, { lazy, useState, useEffect, useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

import { useSelector } from "react-redux";

const Header = () => {
  let onlineStatus = useOnlineStatus();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  //* subscribing to the store using selector.
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);

  const { loggedInUser } = useContext(UserContext);
  // console.log("data", loggedInUser);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="flex justify-between bg-orange-400 shadow-lg mb-2 dark:bg-black dark:text-white md:bg-red-700 lg:bg-green-500 2xl:bg-pink-600">
      <Link to={"/"}>
        <div>
          <img
            className="header-logo w-[100px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xIUhlo7cJ4TZqp7GJSWO6dav22n2O7n2_A&s"
          />
        </div>
      </Link>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-3 font-bold">Offers</li>
          <li className="px-3">Help</li>

          <li className="px-3 font-bold">
            <Link to={"/about"}>about</Link>
          </li>

          <li className="px-3 font-bold">
            <Link to={"/contact"}>Contact</Link>
          </li>

          <li className="px-3 text-lg font-bold text-lg	">
            <Link to={"/cart"}>Cart ({cartItems.length + " items"})</Link>
          </li>

          <li className="px-3 font-bold">
            <Link to={"/grocery"}>Grocery</Link>
          </li>

          <li className="px-3">Online Status: {onlineStatus ? "✅" : "❌"} </li>
          <li className="px-3">{loggedInUser}</li>

          <li>
            <button
              onClick={() => {
                setDarkMode(!darkMode);
              }}
              className={`toggle-button ${
                darkMode ? "toggle-button-dark" : "toggle-button-light"
              }`}
            >
              <div className="toggle-ball"></div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
