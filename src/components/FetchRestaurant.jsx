import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

function FetchRestaurant(props) {
  const [result, setResult] = useState([]);

  var requestOptions = {
    method: "GET",
    headers: {
      "user-key": "cd830f4f567a995967a4a0f641b21007",
      "content-type": "application/json",
    },
    redirect: "follow",
  };
  useEffect(() => {
    fetch(
      `https://developers.zomato.com/api/v2.1/cities?q=${props.query}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((res) => {
        props.category
          ? getReastaurantbyCategory(res.location_suggestions[0].id)
          : getReastaurantbyCity(res.location_suggestions[0].id);
      })
      .catch((error) => console.log("error", error));
  }, []);

  function getReastaurantbyCategory(event) {
    fetch(
      `https://developers.zomato.com/api/v2.1/search?entity_type=city&sort=rating&order=dsc&category=${props.category}&entity_id=${event}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((res) => {
        setResult(res.restaurants);
        console.log("fetch");
      })
      .catch((error) => console.log("error", error));
  }
  function getReastaurantbyCity(event) {
    fetch(
      `https://developers.zomato.com/api/v2.1/search?entity_type=city&sort=rating&order=dsc&entity_id=${event}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((res) => {
        setResult(res.restaurants);
        console.log("fetch");
      })
      .catch((error) => console.log("error", error));
  }
  return (
    <div>{result.length > 0 ? <RestaurantCard cityRest={result} /> : ""}</div>
  );
}

export default FetchRestaurant;
