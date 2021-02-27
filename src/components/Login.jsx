import React, { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import Header from "./Header";
import { LanguageContext } from "../context/LanguageContext";
import fire from "../fire";

export default function SignUp() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const languageContextAPI = React.useContext(LanguageContext);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
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
  function handleSubmit() {}
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
                    <Form.Control
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p> {emailError} </p>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                      {languageContextAPI.t("login.password")}
                    </Form.Label>
                    <Form.Control
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <p> {passwordError} </p>
                  </Form.Group>
                  <Row className="d-flex justify-content-center mt-5 ">
                    <Button
                      onClick={handleLogin}
                      variant="primary"
                      type="submit"
                      id="signup-button"
                      className="shadow-none  w-50 "
                      // onSubmit={handleSubmit()}
                    >
                      <Link className="text-white" to="/">
                        {languageContextAPI.t("login.login")}
                      </Link>
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
