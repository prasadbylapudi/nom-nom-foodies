import React from "react";
import { useState, useEffect, useContext } from "react";
import RestrauntCard from "./RestrauntCard";
import "./Header.css";
import "./Cards.css";
import { restData } from "../utils/data";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
export default function Cards() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [serchList, setSearchList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedInUser } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let jsonData = await data.json();
    setRestaurantList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setSearchList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  function searchHandler(e) {
    setSearchText(e.target.value);
  }

  function handleSubmit() {
    let filteredSearch = restaurantList.filter(
      (restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
      // restaurant.info.avgRating > 4
    );
    setSearchList(filteredSearch);
  }

  const filterRestaurants = () => {
    let filteredData = restaurantList.filter((res) => res.info.avgRating > 4);
    setRestaurantList(filteredData);
  };

  return (
    <div className="dark:bg-gray-500">
      <div className=" flex ">
        <div className=" m-4 p-4">
          <input
            className="search-input border-2 border-gray-950"
            placeholder="search food item"
            value={searchText}
            onChange={searchHandler}
          />
          <button
            className="px-4 py-2 bg-green-300 m-2 rounded-sm"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>

        <div className="flex items-center">
          <button
            className="px-4 py-2 bg-orange-400 m-2 rounded-sm"
            onClick={filterRestaurants}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="flex items-center">
          <input
            className="border-black "
            value={loggedInUser}
            onChange={(e) => {
              // e.preventDefault();
              console.log("event", e);
              setUserName(e.target.value);
            }}
            placeholder="update username"
          />
        </div>
      </div>
      <div className="cards flex flex-wrap justify-around">
        {serchList.length > 0 ? (
          serchList.map((restaurant, index) => (
            <Link to={"/restaurant/" + restaurant.info.id}>
              <RestrauntCard
                key={restaurant.info.name}
                restaurant={restaurant}
              />
              {/* {loggedInUser} */}
            </Link>
          ))
        ) : (
          <ShimmerCard />
        )}
      </div>
    </div>
  );
}

/* 


*/
