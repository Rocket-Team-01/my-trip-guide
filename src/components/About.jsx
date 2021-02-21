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
                  className="img"
                />
                <Card.ImgOverlay className="h-75 ">
                  <Card.Title>Proje Kapsamı</Card.Title>
                  <Row className="h-75 d-flex align-items-end">
                    <Card.Text>
                      Bu proje kapsamında anasayfa içeriği kullanıcının konumuna
                      göre yakın restoranlardan oluşmaktadır. Arama kısmında ise
                      aranan şehirdeki restoranlar gösterilecektir.
                    </Card.Text>
                  </Row>
                </Card.ImgOverlay>
              </Card>
            </Zoom>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center ">
          <Col md={4} className="mt-5">
            <Zoom>
              <Card className="bg-dark text-white grow ">
                <Card.Img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="Card image"
                  className="img"
                />
                <Card.ImgOverlay className="h-75 ">
                  <Card.Title>Proje Yapılış Nedeni</Card.Title>
                  <Row className="h-75 d-flex align-items-end">
                    <Card.Text>
                      Proje Kodluyoruz himayesinde yapılan Adana Full Stack WeB
                      Development kurusunun bitirme ödevidir. Ancak takım
                      arkadaşları olarak bunu bir ödev olarak değil kendimizi
                      geliştirmek için fırsat olarak gördük.
                    </Card.Text>
                  </Row>
                </Card.ImgOverlay>
              </Card>
            </Zoom>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center ">
          <Col md={4} className="mt-5 mb-5">
            <Zoom>
              <Card className="bg-dark text-white ">
                <Card.Img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="Card image"
                  className="img"
                />

                <Card.ImgOverlay className="h-75 ">
                  <Card.Title>Projenin Bize Kattıkları</Card.Title>
                  <Row className="h-75 d-flex align-items-end">
                    <Card.Text>
                      Proje yaparken teknik anlamda kursta öğrendiğimiz konuları
                      pekiştirdik.Aynı zamanda öğrendiklerimizin üstüne çıkıp
                      doküman okumayı, araştırma yapmayı ve takım oyununun
                      inceliklerini keşfettik.
                    </Card.Text>
                  </Row>
                </Card.ImgOverlay>
              </Card>
            </Zoom>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
