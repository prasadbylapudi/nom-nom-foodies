import React from "react";
import { useState, useEffect } from "react";
import RestrauntCard from "./RestrauntCard";
import "./Header.css";
import "./Cards.css";
import { restData } from "../utils/data";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
export default function Cards() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [serchList, setSearchList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    console.log("promise", data);
    let jsonData = await data.json();
    console.log(jsonData);
    setRestaurantList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(
      "resList",
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setSearchList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  function searchHandler(e) {
    console.log(e);
    setSearchText(e.target.value);
    console.log("input", searchText);
  }

  function handleSubmit() {
    let filteredSearch = restaurantList.filter(
      (restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
      // restaurant.info.avgRating > 4
    );

    console.log("filtereddata", filteredSearch);
    setSearchList(filteredSearch);
  }

  const filterRestaurants = () => {
    let filteredData = restaurantList.filter((res) => res.info.avgRating > 4);

    setRestaurantList(filteredData);
    console.log(filteredData);
  };

  return (
    <div>
      <div className="filter">
        <div className="search">
          <div>
            <input
              className="search-input"
              placeholder="search food item"
              value={searchText}
              onChange={searchHandler}
            />
            <button onClick={handleSubmit}>Search</button>
          </div>
        </div>
        <br />
        <button onClick={filterRestaurants}>Top Rated Restaurants</button>
      </div>
      <div className="cards">
        {serchList.length > 0 ? (
          serchList.map((restaurant, index) => (
            <Link to={"/restaurant/" + restaurant.info.id}>
              <RestrauntCard key={restaurant.info.id} restaurant={restaurant} />
              //{" "}
            </Link>
          ))
        ) : (
          <ShimmerCard />
        )}
      </div>
    </div>
  );
}
