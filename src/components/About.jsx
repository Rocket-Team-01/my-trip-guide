import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Image, Card, Button } from "react-bootstrap";
import "../css/About.css";
import Header from "./Header";
import CustomizedTimeline from "./CustomizedTimeline";

export default function About() {
  return (
    <div>
      <Header />
      
      <Container fluid className="full-height">
        <Row className=" d-flex justify-content-center d-flex align-items-center  ">
        <CustomizedTimeline/>
        </Row>
       
      </Container>
    </div>
  );
}
