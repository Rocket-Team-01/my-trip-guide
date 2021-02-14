import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://developers.zomato.com/api/v2.1/search",
      headers: {
        "user-key": "82ff80af46d4915b4282ae5410d607b3",
        "content-type": "application/json"
      }
    })
      .then(response => {
        console.log(response.data.restaurants[0].restaurant.name);
      })
      .catch(error => {
        console.log(error);
      });
  });

  return (
    <div className="App">
      {" "}
      {menu.map(country => {
        return (
          <div key={country.name}>
            <h2> {country.name} </h2>
          </div>
        );
      })}
    </div>
  );
}
