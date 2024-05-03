import React from "react";
import "./Header.css";
function RestrauntCard(props) {
  return (
    <div className=" m-4 p-4 w-[300px] bg-gray-100 hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-gray-800">
      <img
        className="card-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props?.restaurant?.info?.cloudinaryImageId}`}
      />
      <div className="flex flex-col justify-items-start">
        <h1 className="font-bold py-2 text-lg">
          {props?.restaurant?.info?.name}
        </h1>
        <h4 className="font-bold py-2 text-lg">
          {props?.restaurant?.info?.cuisines.join(", ")}
        </h4>
        <h4 className="font-bold py-2 text-sm">
          Avg Rating:{props?.restaurant?.info?.avgRating}
        </h4>
        <h4 className="font-bold py-2 text-sm">
          {props?.restaurant?.info?.costForTwo}
        </h4>
        <h4 className=" font-bold py-2 text-sm">
          {props?.restaurant?.info?.sla?.deliveryTime} minutes
        </h4>
      </div>
    </div>
  );
}

export default RestrauntCard;
