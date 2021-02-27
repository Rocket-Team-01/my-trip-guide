import React, { useState, useEffect } from "react";
import "../css/SignUp.css";
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

  const handleLogin = () => {
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

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div>
      <Header />
      <Container fluid className="full-height ">
        <Row className="h-100">
          <Col
            md={4}
            className="h-100 d-none d-lg-block"
            id="left-background"
          ></Col>
          <Col md={12} xs={12} sm={12} lg={8} className="h-100 w-100 bg-light">
            <Row className=" h-100 d-flex justify-content-center d-flex align-items-center  ">
              <Col md={6}>
                <h1 className="text-center mb-3">
                  {languageContextAPI.t("signup.signup")}
                </h1>
                <Form className=" ">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                      {languageContextAPI.t("signup.mail")}
                    </Form.Label>
                    <Form.Control
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      {languageContextAPI.t("signup.never")}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                      {languageContextAPI.t("signup.password")}
                    </Form.Label>
                    <Form.Control
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Row className="d-flex justify-content-center mt-5 ">
                    <Button
                      onClick={handleSignUp}
                      variant="primary"
                      type="submit"
                      id="signup-button"
                      className="shadow-none  w-50 "
                    >
                      {languageContextAPI.t("signup.signup")}
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

/*
                  <Row className=".nopadding">
                    <Col md={6} className=" ">
                      <Form.Group controlId="formBasicName">
                        <Form.Label>
                          {languageContextAPI.t("signup.name")}
                        </Form.Label>
                        <Form.Control type="email" />
                      </Form.Group>
                    </Col>
                    <Col md={6} className=" ">
                      <Form.Group controlId="formBasicUserName">
                        <Form.Label>
                          {languageContextAPI.t("signup.username")}
                        </Form.Label>
                        <Form.Control type="email" />
                      </Form.Group>
                    </Col>
                  </Row>
                  */

/*
const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [nameError, setNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
                  */
