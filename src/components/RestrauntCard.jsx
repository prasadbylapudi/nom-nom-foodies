import React from "react";
import "./Header.css";
function RestrauntCard(props) {
  return (
    <div
      className="rest-card m-4 p-4 w-[300px]"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="card-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props?.restaurant?.info?.cloudinaryImageId}`}
      />
      <h1 className="capitalize hover:uppercase">
        {props?.restaurant?.info?.name}
      </h1>
      <h4 className="">{props?.restaurant?.info?.cuisines.join(", ")}</h4>
      <h4>Avg Rating:{props?.restaurant?.info?.avgRating}</h4>
      <h4>{props?.restaurant?.info?.costForTwo}</h4>
      {/* <h4>{props?.restaurant?.info?.deliveryTime} minutes</h4> */}
    </div>
  );
}

export default RestrauntCard;
