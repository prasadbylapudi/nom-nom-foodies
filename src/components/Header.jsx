import React, { lazy } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let onlineStatus = useOnlineStatus();

  return (
    <div className="header-container flex justify-between bg-orange-500 shadow-lg mb-2">
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
          <li className="px-3">Offers</li>
          <li className="px-3">Help</li>
          <li className="px-3">Signin</li>

          <li className="px-3">
            <Link to={"/about"}>about</Link>
          </li>

          <li className="px-3">
            <Link to={"/contact"}>Contact</Link>
          </li>

          <li className="px-3">Cart</li>

          <li className="px-3">
            <Link to={"/grocery"}>Grocery</Link>
          </li>

          <li className="px-3">Online Status: {onlineStatus ? "✅" : "❌"} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
