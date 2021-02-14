import React from "react";
import { Card, Row, Col, Button, Container, Image } from "react-bootstrap";
export default function RestaurantCard(props) {
  return (
    <div>
      <Container fluid>
        <Row className=" text-center">
          {props.cityRest.map((item, index) => (
            <Col key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
              {console.log(item.restaurant.name)}
              <div>
                <h2 className="py-5 fs-4 text-dark">{item.restaurant.name}</h2>
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
          ))}
        </Row>
      </Container>
    </div>
  );
}
/* 
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
         */
