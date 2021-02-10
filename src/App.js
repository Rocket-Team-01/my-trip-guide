import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Container fluid>
            <Row>
              <Col>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route exact path="/signup">
                    <SignUp />
                  </Route>
                </Switch>
              </Col>
            </Row>
          </Container>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
