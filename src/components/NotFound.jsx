import React from "react";
import { Container, Image, Col, Row } from "react-bootstrap";
import "../css/Home.css";
import Header from "./Header";
import Notfnd from "../images/Notfnd.png";
import { LanguageContext } from "../context/LanguageContext";
function NotFound() {
  const languageContextAPI = React.useContext(LanguageContext);
  function goBack() {
    window.history.back();
  }

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row className="justify-content-center align-items-center text-center ">
        <Col>
          <img className="notfnd" src={Notfnd} alt="" />
          <h1 className="page-title">
            {languageContextAPI.t("notfound.page")}
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center text-center mt-1">
        <button className="btn button-round text-white" onClick={goBack}>
          Go Back
        </button>
      </Row>
    </Container>
  );
}

export default NotFound;
