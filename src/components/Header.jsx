import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Link to={"/"}>
        <div>
          <img
            className="header-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xIUhlo7cJ4TZqp7GJSWO6dav22n2O7n2_A&s"
          />
        </div>
      </Link>
      <div className="header-items">
        <ul>
          <li>Offers</li>
          <li>Help</li>
          <li>Signin</li>
          <Link to={"/about"}>
            <li>about</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
