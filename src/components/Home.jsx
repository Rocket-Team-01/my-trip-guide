import {
  Container,
  InputGroup,
  Form,
  FormControl,
  Button,
  Image,
  Col,
  Row,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Home.css";
import Header from "./Header";

export default function Home() {
  let history = useHistory();
  const [value, setValue] = React.useState("");
  const [best, setBest] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((response) => {
      const lat = response.coords.latitude;
      const lon = response.coords.longitude;
      axios({
        method: "GET",
        url: `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lon}`,
        headers: {
          "user-key": "415c9b42482714e36aa1e285b7ab62be",
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

  function handleSubmit(event) {
    setValue(value.toLowerCase());
    history.push(`/search/${value}`);
  }
  return (
    <div>
      <Container fluid id="home" className="m-0 p-0" >
        <Row className="m-0 p-0" >
        <Header />
        </Row  >
        <Row className=" justify-content-center align-items-center m-0 p-0" >
        <div className="landing-text text-light mt-5 pt-5">
          <h1 className="pb-2" >Search For</h1>
          <h4 className="pb-4" >Best Restaurants</h4>
          <Row className=" justify-content-center align-items-center m-0 p-0" >
            <Col sm={8}>
              <InputGroup 
              className="m-0 p-0"
              as={Form}
              onSubmit={handleSubmit}>
                <FormControl
                  className="input-search m-0 p-2"
                  placeholder="Adana/Pozanti"
                  onChange={(event) => {
                    setValue(event.target.value);
                  }}
                />
                <InputGroup.Append>
                  <Button variant="danger">Category</Button>
                </InputGroup.Append>
                <InputGroup.Append>
                  <Button variant="dark" type='submit'>Search</Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
        </div>
        </Row>
      </Container>
      <h1 className="text-center py-5 bg-light underline">The Most Popular Restaurants</h1>
      <Container fluid className="bg-dark" >
        <Row className="text-center">
          {best.slice(0,8).map((item, index) => {
            return (
              <Col key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
                <div>
                  <h2 className="py-5 fs-4 text-white">{item.restaurant.name}</h2>
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
    </div>
  );
}
