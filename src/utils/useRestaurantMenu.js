import React, { useState, useEffect } from "react";
import { swiggyMenuURL } from "./constants";
const useRestaurantMenu = (resId) => {
  
    const [menuData, setMenuData] = useState(null);

    useEffect(() => {
        fetchMenuData();
        console.log("menuData", menuData);
    }, []);

  async function fetchMenuData() {
    let fetchData = await fetch(swiggyMenuURL + `${resId}`);
    let jsonData = await fetchData.json();
    console.log("jsonData...",jsonData);
    setMenuData(
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
    // console.log(jsonData);
  }

  return menuData;
}

export default useRestaurantMenu