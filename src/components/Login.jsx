import React from "react";
import "../css/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Col,
  Container,
  Image,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Header from "./Header";
import { LanguageContext } from "../context/LanguageContext";
export default function SignUp() {
  const languageContextAPI = React.useContext(LanguageContext);
  return (
    <div>
      <Header />
      <Container fluid className="full-height ">
        <Row className="h-100">
          <Col
            md={4}
            className="h-100 d-none d-lg-block"
            id="left-background-new"
          ></Col>
          <Col md={12} xs={12} sm={12} lg={8} className="h-100 w-100 bg-light">
            <Row className=" h-100 d-flex justify-content-center d-flex align-items-center  ">
              <Col md={6}>
                <h1 className="text-center mb-3">
                  {languageContextAPI.t("login.login")}
                </h1>
                <Form className=" ">
                  <Form.Group controlId="formBasicUserName">
                    <Form.Label>
                      {languageContextAPI.t("login.username")}
                    </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                      {languageContextAPI.t("login.password")}
                    </Form.Label>
                    <Form.Control type="password" />
                  </Form.Group>
                  <Row className="d-flex justify-content-center mt-5 ">
                    <Button
                      variant="primary"
                      type="submit"
                      id="signup-button"
                      className="shadow-none  w-50 "
                    >
                      {languageContextAPI.t("login.login")}
                    </Button>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
