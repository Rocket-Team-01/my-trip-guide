import { Container, Image, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import "../css/Home.css";
import Header from "./Header";
import SearchInput from "./SearchInput";
import { useTranslation } from "react-i18next";
import RestaurantCard from "./RestaurantCard";
import i18next from "i18next";
export default function Home(props) {
  const { t } = useTranslation();
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

  function handleClick(lang) {
    i18next.changeLanguage(lang);
    console.log(lang)
  }
  return (
    <div>
      <button onClick={() => handleClick("en")}>en</button>
      <button onClick={() => handleClick("tr")}>tr</button>
      <Container fluid id="home" className="m-0 p-0">
        <Row className="m-0 p-0 ">
          <Header />
        </Row>
        <Row className=" justify-content-center align-items-center m-0 p-0">
          <div className="landing-text text-light mt-5 pt-5">
            <h1 className="pb-2">{t("greeting.1")}</h1>
            <h4 className="pb-4">Best Restaurants</h4>
            <Row className=" justify-content-center align-items-center m-0 p-0">
              <Col sm={8}>
                <SearchInput />
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
      {city ? (
        <>
          <h1 className="text-center py-5 bg-light ">
            The Most Popular Restaurants in <br /> {city}
          </h1>
          <Container fluid className="bg-white">
            <Row>
              <RestaurantCard cityRest={result} />
            </Row>
          </Container>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

/* 
<Container fluid className="bg-dark">
        <Row className="text-center">
          {best.slice(0, 8).map((item, index) => {
            return (
              <Col key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
                <div>
                  <h2 className="py-5 fs-4 text-white">
                    {item.restaurant.name}
                  </h2>
                  {item.restaurant.featured_image ? (
                    <Image
                      style={{ width: "200px", height: "200px" }}
                      src={item.restaurant.featured_image}
                      thumbnail
                    />
                  ) : (
                    <Image
                      style={{ width: "200px", height: "200px" }}
                      src="https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png?output-format=webp%22"
                      className="mb-5"
                      thumbnail
                    />
                  )}
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
*/
