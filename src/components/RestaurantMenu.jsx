import React, { useState, useEffect } from "react";
import { swiggyMenuURL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerCard from "./ShimmerCard";
function RestaurantMenu() {
  // const [menuData, setMenuData] = useState([]);
  const { resId } = useParams();
  
  // useEffect(() => {
  //   fetchMenuData();
  //   console.log("menuData", menuData);
  // }, []);

  // async function fetchMenuData() {
  //   let fetchData = await fetch(swiggyMenuURL + `${resId}`);
  //   let jsonData = await fetchData.json();

  //   setMenuData(
  //     jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
  //       ?.card?.card?.itemCards
  //   );
  //   console.log(jsonData);
  // }

  const menuData = useRestaurantMenu(resId);
  console.log("data..", menuData);
  if (menuData == null) return <ShimmerCard />;

  return (
    <div className="restaurantmenu">
      <div>
        {menuData.map((item, index) => {
          return (
            <div key={index}>
              {}
              <ul>
                <li>{item?.card?.info?.name}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RestaurantMenu;
