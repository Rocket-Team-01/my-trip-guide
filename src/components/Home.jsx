import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => setCountries(response.data))
      .catch(error => console.log(error));
  });

  return (
    <div className="App">
      {countries.map(country => {
        return (
          <div key={country.name}>
            
            <h2>{country.name}</h2>
            <h4> {country.capital} </h4>
            <p>
              <img
                src={country.flag}
                alt={country.name}
                style={{ width: "100px" }}
              />
            </p>
          </div>
        );
      })}
    </div>
  );
}
