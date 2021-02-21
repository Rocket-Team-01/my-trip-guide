import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Image, Card, Button } from "react-bootstrap";
import "../css/About.css";
import Header from "./Header";
import Zoom from "react-reveal/Zoom";
export default function About() {
  return (
    <div>
      <Header />
      <Container fluid className="main-color full-height">
        <Row className="d-flex justify-content-center">
          <Col md={4} className="mt-5">
            <Zoom>
              <Card className="bg-dark text-white grow">
                <Card.Img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Zoom>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center ">
          <Col md={4} className="mt-5">
          <Zoom>
              <Card className="bg-dark text-white grow">
                <Card.Img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Zoom>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center ">
          <Col md={4} className="mt-5 mb-5">
          <Zoom>
              <Card className="bg-dark text-white grow">
                <Card.Img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Zoom>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
