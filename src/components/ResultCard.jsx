import React, { useState, useContext, useEffect, Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "@material-ui/core/Card";
import Modal from "@material-ui/core/Modal";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import "../css/Home.css";
import food from "../images/food.png";
import { GlobalContext } from "../context/GlobalState";
import fire from "../fire";

function ResultCard(props) {
  const { item, index } = props;
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { addtoFavorıtes, favoriteslist } = useContext(GlobalContext);

  let storedRest = favoriteslist.find(
    (o) => o.restaurant.id === item.restaurant.id
  );

  const favoritesClass = storedRest ? "favorite" : "notfavorite";

  const [user, setUser] = useState("");
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);
  function handleClick(item) {
    addtoFavorıtes(item);
  }

  return (
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
            {user ? (
              <button
                className="btn text-dark p-2 rounded-3 text-white float-right float-bottom shadow-none"
                key={index}
                onClick={() => {
                  handleClick(item);
                }}
              >
                <i key={index} className={`fas fa-heart ${favoritesClass}`}></i>
              </button>
            ) : (
              ""
            )}
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
                      data-target="#exampleModal"
                      onClick={handleOpen}
                    >
                      {t("details.2")}
                    </button>

                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                      className="text-center"
                    >
                      <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <div className="mx-auto">
                              <h5
                                className="modal-title modaltitle text-center"
                                id="exampleModalLabel"
                              >
                                {item.restaurant.name} <br />
                                <span className=" bg-success rounded-3 text-white p-1 text-center">
                                  {item.restaurant.phone_numbers.slice(0, 12)}{" "}
                                  <i className="fas fa-phone"></i>
                                </span>
                              </h5>
                            </div>
                            <button
                              type="button"
                              className="close pl-0 ml-0"
                              data-dismiss="modal"
                              aria-label="Close"
                              onClick={handleClose}
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body ">
                            {t("details.3")}:{" "}
                            <span className="data ">
                              {item.restaurant.average_cost_for_two}{" "}
                              {item.restaurant.currency}
                            </span>{" "}
                            <br />
                            {t("details.4")}:{" "}
                            <span className="data">
                              {item.restaurant.timings}
                            </span>{" "}
                            <br />
                            {t("details.5")}:{" "}
                            <span className="data">
                              {item.restaurant.location.address}
                            </span>
                          </div>
                          <div className="modal-footer mx-auto">
                            <button
                              type="button"
                              className="btn button-round text-white"
                              data-dismiss="modal"
                              onClick={handleClose}
                            >
                              {t("details.6")}
                            </button>
                          </div>
                        </div>
                      </div>
                    </Modal>
                  </div>
                </Typography>
              </CardContent>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}

export default ResultCard;
