import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";

import "../css/Home.css";
import food from "../images/food.png";
import { GlobalContext } from "../context/GlobalState";
import fire from "../fire";
import ResultCard from "./ResultCard";

export default function RestaurantCard(props) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [cost, setCost] = useState("");
  const [currency, setCurrency] = useState("");
  const [timing, setTiming] = useState("");
  const [address, setAddress] = useState("");

  const { addtoFavorıtes, favicon, setFavicon, favoriteslist } = useContext(
    GlobalContext
  );

  const [user, setUser] = useState("");
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log(user);
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
    <Container>
      <Row className="py-5 justify-content-center align-items-center text-center ">
        {props.cityRest.map((item, index) => (
          <ResultCard item={item} index={index} key={index} />
        ))}
      </Row>
    </Container>
  );
}
