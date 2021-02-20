import React from "react";
import Header from "./Header";
import ParticlesBg from "particles-bg";
import { Row, Col, Container, Image, Card, Button } from "react-bootstrap";
export default function Contact() {
  return (
    <div>
      <Header />
      <Container  fluid>
        <Row className=" border-none h-100 mh-100 d-flex align-items-center bg-danger" style={{height: "100vh"}}>
          <Col md={4}>
            <Card className>
           
              <Card.Body>
              <Card.Img
                className="img-fluid w-50  rounded-circle mx-auto d-block"
                src="https://pbs.twimg.com/profile_images/1181475356060073984/EX0DJS_1_400x400.jpg"
              />
                <Card.Title>Ali Said Güneş</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Img
                  variant="top"
                  className="img-fluid w-50  rounded-circle mx-auto d-block "
                  src="https://pbs.twimg.com/profile_images/1181475356060073984/EX0DJS_1_400x400.jpg"
                />

                <Card.Title>Ali Said Güneş</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Img
                  variant="top"
                  className="img-fluid w-50  rounded-circle mx-auto d-block"
                  src="https://pbs.twimg.com/profile_images/1181475356060073984/EX0DJS_1_400x400.jpg"
                />

                <Card.Title>Ali Said Güneş</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <ParticlesBg type="cobweb" bg={true} />
      </Container>
    </div>
  );
}
