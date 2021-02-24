import { Container, Image, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import "../css/Home.css";
import Header from "./Header";
import SearchInput from "./SearchInput";
import RestaurantCard from "./RestaurantCard";
import { LanguageContext } from "../context/LanguageContext";
import FetchRestaurant from "./FetchRestaurant";
import Footer from "./Footer";
export default function Home(props) {
  const languageContextAPI = React.useContext(LanguageContext);
  const [result, setResult] = useState([]);
  const [city, setCity] = useState("");

  var requestOptions = {
    method: "GET",
    headers: {
      "user-key": "db2be0967570927606ec338dc209b5ea",
      "content-type": "application/json",
    },
    redirect: "follow",
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((response) => {
      const lat = response.coords.latitude;
      const lon = response.coords.longitude;
      fetch(
        `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lon}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((res) => {
          setResult(res.restaurants);
        })
        .catch((error) => console.log("error", error));
      fetch(
        `https://developers.zomato.com/api/v2.1/cities?lat=${lat}&lon=${lon}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((res) => {
          setCity(res.location_suggestions[0].name);
        })
        .catch((error) => console.log("error", error));
    });
  }, []);

  return (
    <div>
      <Container fluid id="home" className="m-0 p-0 ">
        <Row className="m-0 p-0 ">
          <Header />
        </Row>
        <Row className=" m-0 p-0 align-items-center h-100 ">
          <div className="landing-text text-light  ">
            <h1 className="title pt-5 ">
              {languageContextAPI.t("greeting.1")}
            </h1>
            <Row className="searchinput mx-auto p-0 m-0">
              <SearchInput />
            </Row>
          </div>
        </Row>
      </Container>
      {/* <div class="wrapper">
        <div class="divider div-transparent"></div>
      </div> */}
      {city ? (
        <>
          <h6 className="text-center py-5 bg-light m-0 minititle ">
            The Most Popular Restaurants in <br /> {city}
          </h6>
          <Container fluid className="resback">
            <Row>
              <FetchRestaurant query={city} category={""} />
            </Row>
          </Container>
        </>
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
}
