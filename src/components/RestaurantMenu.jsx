import React, { useState, useEffect } from "react";
import { swiggyMenuURL } from "../utils/constants";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const [menuData, setMenuData] = useState([]);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenuData();
    console.log("menuData", menuData);
  }, []);

  async function fetchMenuData() {
    let fetchData = await fetch(swiggyMenuURL + `${resId}`);
    // let fetchData = await fetch(
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6300897&lng=83.0683519&restaurantId=581809"
    // );
    let jsonData = await fetchData.json();

    setMenuData(
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
    console.log(jsonData);
    // console.log(
    //   "menu Data",
    //   jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // );
  }

  return (
    <div className="restaurantmenu">
      <div>
        {menuData.map((item, index) => {
          console.log(item);
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
