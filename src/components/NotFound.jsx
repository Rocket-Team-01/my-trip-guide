import React from "react";
import { Container, Image, Col, Row } from "react-bootstrap";
import "../css/Home.css";
import Header from "./Header";

function NotFound() {
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row className="justify-content-center align-items-center text-center mt-5">
        <Col>
          <h1>404 NOT FOUND</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
