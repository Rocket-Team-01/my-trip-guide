import React from "react";
import Header from "./Header";
import { Container, Row, Col, Table } from "react-bootstrap";
import ProfileLists from "./ProfileLists";
import "../css/ProfilePage.css";

function ProfilePage() {
  return (
    <div>
      <Header />
      <Container fluid>
        <Row
          component={"span"}
          className="d-flex justify-content-center mx-5 align-items-center mt-5 "
        >
          <h3 className="text-center">Profile Information</h3>
          <Table striped bordered hover className="w-50 mx-auto mt-5 tableback">
            <tbody>
              <tr className="text-white">
                <td>Name :</td>
                <td>Dale Richardson</td>
              </tr>
              <tr className="text-white">
                <td>Email :</td>
                <td>dale.richardson@example.com</td>
              </tr>
              <tr className="text-white">
                <td>Address :</td>
                <td>8135 Royal Ln</td>
              </tr>
              <tr className="text-white">
                <td>Phone Number :</td>
                <td>(407)-954-0623</td>
              </tr>
              <tr className="text-white">
                <td>Birthday :</td>
                <td>8/2/1953</td>
              </tr>
            </tbody>
          </Table>

          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-center">
            <img
              className="profileimg"
              src="https://randomuser.me/api/portraits/lego/8.jpg"
              alt="random"
            />
          </Col>
        </Row>
        <Row className=" text-center d-flex justify-content-center mt-5">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={5}
            className="text-center mx-auto"
          >
            <ProfileLists />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProfilePage;
/*

<Row component={"span"}>
          <h3 className="text-center">Profile Information</h3>
          <Table striped bordered hover className="w-50 mx-auto mt-5 tableback">
            <tbody>
              <tr className="text-white">
                <td>Name :</td>
                <td>Dale Richardson</td>
              </tr>
              <tr className="text-white">
                <td>Email :</td>
                <td>dale.richardson@example.com</td>
              </tr>
              <tr className="text-white">
                <td>Address :</td>
                <td>8135 Royal Ln</td>
              </tr>
              <tr className="text-white">
                <td>Phone Number :</td>
                <td>(407)-954-0623</td>
              </tr>
              <tr className="text-white">
                <td>Birthday :</td>
                <td>8/2/1953</td>
              </tr>
            </tbody>
          </Table>
        </Row>
*/

/*
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



*/
