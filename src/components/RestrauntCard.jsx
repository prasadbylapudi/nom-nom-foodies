import React from "react";
import "./Header.css";
function RestrauntCard(props) {
  // console.log("props", props);
  return (
    <div className="rest-card">
      <img
        className="card-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props?.restaurant?.info?.cloudinaryImageId}`}
      />

      <h1>{props.restaurant?.info?.name}</h1>
      <p>{props.restaurant?.info?.avgRating}</p>
      <p>{props.restaurant?.info?.costForTwo}</p>
      <h5></h5>
    </div>
  );
}

export default RestrauntCard;
