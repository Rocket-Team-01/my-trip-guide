import React from "react";
import Header from "./Header";
import { Container, Row, Col } from "react-bootstrap";
import ProfileLists from "./ProfileLists";
import "../css/ProfilePage.css";

function ProfilePage() {
  return (
    <div>
      <Header />
      <Container fluid>
        <Row className="d-flex justify-content-center mx-5 align-items-center mt-5 ">
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            className="text-center mx-auto"
          >
            <ProfileLists />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-center">
            <img
              className="profileimg"
              src="https://images.generated.photos/Bf2LOu56nHGho50iWW2nyRcy22HQPawSDkshFOKeH0g/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzAw/MDE5NzMuanBn.jpg"
              alt="random"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProfilePage;
