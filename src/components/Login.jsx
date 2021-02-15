import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://developers.zomato.com/api/v2.1/search",
      headers: {
        "user-key": "7a5271a9bcd39c98815f81510b921ec4",
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
