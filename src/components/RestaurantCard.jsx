import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "../css/Home.css";
import { useTranslation } from "react-i18next";
import food from "../images/food.png";
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
      <Row className="py-5 justify-content-center align-items-center text-center ">
        {props.cityRest.map((item, index) => (
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            className="mx-auto py-2 "
            key={index}
          >
            <Card className={` rest-card card`}>
              <Row>
                <Col xs={12} sm={5} md={5} lg={5} xl={4} className="">
                  <span
                    className="p-2 rounded-3 text-white float-left"
                    style={{
                      backgroundColor: `#${item.restaurant.user_rating.rating_color}`,
                      width: "50px",
                    }}
                  >
                    {item.restaurant.user_rating.aggregate_rating}
                  </span>
                  {item.restaurant.featured_image ? (
                    <CardMedia
                      className={` m-0 p-0 rest-img`}
                      image={item.restaurant.featured_image}
                      style={{ width: "200px", height: "12rem" }}
                    />
                  ) : (
                    <CardMedia
                      className={`mx-auto rest-img`}
                      image={food}
                      style={{ width: "200px", height: "200px" }}
                    />
                  )}
                </Col>
                <Col
                  xs={12}
                  sm={7}
                  md={7}
                  lg={5}
                  xl={8}
                  className="text-center justify-content-center"
                >
                  <div>
                    <CardContent
                      className=" text-center d-block mx-auto"
                      align="center"
                    >
                      <Typography
                        component="h5"
                        variant="h5"
                        className="text-center mx-auto"
                        style={{ width: "200px" }}
                      >
                        {item.restaurant.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        className="pt-1 text-center mx-auto "
                        style={{ width: "200px" }}
                      >
                        {t("details.1")} :{" "}
                        {item.restaurant.phone_numbers.slice(0, 12)}
                        <br />
                        <div className=" mx-auto d-flex m-2 p-2 text-center justify-content-center ">
                          <button
                            type="button"
                            className="btn mx-auto float-center details "
                            data-toggle="modal"
                            data-target=".bd-example-modal-lg"
                            onClick={() => {
                              setName(item.restaurant.name);
                              setNumber(
                                item.restaurant.phone_numbers.slice(0, 12)
                              );
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
                                  <div className="mx-auto">
                                    <h5
                                      className="modal-title modaltitle text-center"
                                      id="exampleModalLabel"
                                    >
                                      {name} <br />
                                      <span className=" bg-success rounded-3 text-white p-1 text-center">
                                        {number}{" "}
                                        <i className="fas fa-phone"></i>
                                      </span>
                                    </h5>
                                  </div>
                                  <button
                                    type="button"
                                    className="close pl-0 ml-0"
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
                                  {t("details.4")}:{" "}
                                  <span className="data">{timing}</span> <br />
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
                                  <button
                                    type="button"
                                    className="btn btn-success"
                                  >
                                    {t("details.7")}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Typography>
                    </CardContent>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
