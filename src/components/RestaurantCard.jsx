import React, { useState } from "react";
import { Row, Col, Container, Image, Card, Button } from "react-bootstrap";
import "../css/Home.css";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export default function RestaurantCard(props) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [cost, setCost] = useState("");
  const [currency, setCurrency] = useState("");
  const [timing, setTiming] = useState("");
  const [address, setAddress] = useState("");
  console.log("rest card");
  return (
    <Container>
      <Row className="pb-5 justify-content-center">
        {props.cityRest.map((item, index) => (
          <React.Fragment key={index}>
            <Col xs={12} sm={6} md={6} lg={3} xl={3} className="pb-3">
              {item.restaurant.featured_image ? (
                <Image
                  className="my-3 rounded-3 border border-dark mx-auto d-block"
                  style={{ width: "200px", height: "150px" }}
                  src={item.restaurant.featured_image}
                />
              ) : (
                <Image
                  style={{ width: "200px", height: "150px" }}
                  src="https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png?output-format=webp%22"
                  className="my-3  rounded-3 border border-dark mx-auto d-block"
                />
              )}
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} xl={3}>
              <div className="text-center textback mt-3">
                <h3 className="text-dark fs-5 font-weight-bold pt-3">
                  {item.restaurant.name}
                </h3>
                <h6 className="text-dark">
                  {t("details.1")} :{" "}
                  {item.restaurant.phone_numbers.slice(0, 12)}
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
                  {t("details.2")}
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
                        {t("details.3")}:{" "}
                        <span className="data">
                          {cost} {currency}
                        </span>{" "}
                        <br />
                        {t("details.4")}: <span className="data">{timing}</span>{" "}
                        <br />
                        {t("details.5")}:{" "}
                        <span className="data">{address}</span>
                      </div>
                      <div className="modal-footer mx-auto">
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-dismiss="modal"
                        >
                          {t("details.6")}
                        </button>
                        <button type="button" className="btn btn-success">
                          {t("details.7")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
}
/*
{
  props.cityRest.map((item, index) => (
    <Row key={index} className="w-50 my-3 mx-auto justify-content-center">
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
          {t("details.1")} : {item.restaurant.phone_numbers.slice(0, 12)}
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
          {t("details.2")}
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
                {t("details.3")}:{" "}
                <span className="data">
                  {cost} {currency}
                </span>{" "}
                <br />
                {t("details.4")}: <span className="data">{timing}</span> <br />
                {t("details.5")}: <span className="data">{address}</span>
              </div>
              <div className="modal-footer mx-auto">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  {t("details.6")}
                </button>
                <button type="button" className="btn btn-success">
                  {t("details.7")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  ));
}
*/
