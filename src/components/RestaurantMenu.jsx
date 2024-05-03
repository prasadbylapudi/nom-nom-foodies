import React, { useState, useEffect } from "react";
import { swiggyMenuURL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerCard from "./ShimmerCard";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function RestaurantMenu() {
  const { resId } = useParams();

  const dispatch = useDispatch();
  function handleAddItem(item) {
    console.log("added item is:", item?.card?.info);
    dispatch(addItem(item?.card?.info));

    toast("item added to the cart");
  }

  const menuData = useRestaurantMenu(resId);
  console.log("data..", menuData);
  if (menuData == null) return <ShimmerCard />;

  return (
    <div className="restaurantmenu">
      <div>
        {menuData.map((item, index) => {
          return (
            <div key={item?.card?.info?.name}>
              {}
              <ul>
                <li className="m-4 p-4">
                  {item?.card?.info?.name}-{item?.card?.info?.price / 100}
                  <button
                    onClick={() => {
                      handleAddItem(item);
                    }}
                    className="bg-black text-white hover:bg-sky-700 m-4 p-4"
                  >
                    Add+
                  </button>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RestaurantMenu;
