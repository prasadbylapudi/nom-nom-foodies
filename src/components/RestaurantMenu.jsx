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
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white rounded-lg shadow-lg p-4 flex items-center">
                  <div className="w-20 h-20 mr-4 overflow-hidden rounded-lg">
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.card?.info?.imageId}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {item?.card?.info?.name}
                    </h3>
                    <p className="text-gray-600">
                      {item?.card?.info?.description}
                    </p>
                    <p className="text-gray-800 font-semibold">
                      ₹ {item?.card?.info?.price / 100}
                    </p>
                    <button
                      onClick={() => {
                        handleAddItem(item);
                      }}
                      className="bg-black text-white hover:bg-sky-700 m-4 p-4"
                    >
                      Add+
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RestaurantMenu;
