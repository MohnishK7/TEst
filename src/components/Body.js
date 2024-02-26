import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // super power variable -> local state variable in React
  // to make this super power variable we use react hooks -> know as use State

  // Noramal js variable
  // let listofRestaurant = [];

  // state variable
  const [listofRestaurant, setListRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("button click");

            // filter logic
            const filteredList = listofRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            // find out the diff and update the UI
            // automaticall redender
            setListRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
