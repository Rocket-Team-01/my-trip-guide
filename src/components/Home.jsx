import { Container, Image, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Home.css";
import Header from "./Header";
import SearchInput from "./SearchInput";
import {useTranslation} from "react-i18next";

export default function Home(props) {

  const { t, i18n} = useTranslation();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [cost, setCost] = useState("");
  const [currency, setCurrency] = useState("");
  const [timing, setTiming] = useState("");
  const [address, setAddress] = useState("");

  const [best, setBest] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((response) => {
      const lat = response.coords.latitude;
      const lon = response.coords.longitude;
      axios({
        method: "GET",
        url: `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lon}`,
        headers: {
          "user-key": "db2be0967570927606ec338dc209b5ea",
          "content-type": "application/json",
        },
      })
        .then((response) => {
          let abcd = response.data.restaurants;
          setBest(abcd);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);

  return (
    <div>
      <Container fluid id="home" className="m-0 p-0">
        <Row className="m-0 p-0 ">
          <Header />
        </Row>
        <Row className=" justify-content-center align-items-center m-0 p-0">
          <div className="landing-text text-light mt-5 pt-5">
            <h4 className="pb-4 greeting">{t("greeting")}</h4>
            <Row className=" justify-content-center align-items-center m-0 p-0">
              <Col sm={8}>
                <SearchInput />
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
      <h1 className="text-center py-5 bg-light underline">
        The Most Popular Restaurants
      </h1>
      <Container className="bg-white">
        <Row  >
          {best.slice(0, 8).map((item, index) => {
            return (
              <Row
                key={index}
                className="w-50 my-3 mx-auto justify-content-center"
              >
                <Col xs={12} sm={12} md={12} lg={6} xl={5}>
                  {item.restaurant.featured_image ? (
                    <Image
                      className="my-3  rounded-3 border border-dark"
                      style={{ width: "200px", height: "150px" }}
                      src={item.restaurant.featured_image}
                    />
                  ) : (
                    <Image
                      style={{ width: "200px", height: "150px" }}
                      src="https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png?output-format=webp%22"
                      className="my-3  rounded-3 border border-dark"
                    />
                  )}
                </Col>
                <Col xs={12} sm={12} md={0} lg={6} xl={5} className="pt-3">
                  <h3 className="text-dark fs-5 font-weight-bold">
                    {item.restaurant.name}
                  </h3>
                  <h6 className="text-dark">
                    Phone: {item.restaurant.phone_numbers.slice(0, 12)}
                  </h6>
                  <h6 className="text-dark py-1">
                    <span
                      className="p-2 rounded-3 text-white"
                      style={{
                        backgroundColor: `#${item.restaurant.user_rating.rating_color}`,
                      }}
                    >
                      {item.restaurant.user_rating.aggregate_rating}
                    </span>
                  </h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#e74c3c"
                    className="bi bi-heart-fill mr-3 "
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#2c3e50"
                    className="bi bi-bookmark-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                  </svg>
                  <button
                    type="button"
                    className="btn btn-primary ml-2"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg"
                    onClick={() => {
                      setName(item.restaurant.name);
                      setNumber(item.restaurant.phone_numbers.slice(0, 12));
                      setCost(item.restaurant.average_cost_for_two);
                      setCurrency(item.restaurant.currency);
                      setTiming(item.restaurant.timings);
                      setAddress(item.restaurant.location.address);
                    }}
                  >
                    Details
                  </button>
                  <div
                    className="modal fade bd-example-modal-lg"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="myLargeModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            {name}{" "}
                            <span className="ml-3 bg-success rounded-3 text-white p-1">
                              {number} <i className="fas fa-phone"></i>
                            </span>
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          Average cost For Two People:{" "}
                          <span className="data">
                            {cost} {currency}
                          </span>{" "}
                          <br />
                          Opening Hours: <span className="data">
                            {timing}
                          </span>{" "}
                          <br />
                          Address: <span className="data">{address}</span>
                        </div>
                        <div className="modal-footer mx-auto">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-success">
                            Add to Favorites
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            );
          })}
        </Row>
      </Container>
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
