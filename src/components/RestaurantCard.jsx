import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import "../css/Home.css";
export default function RestaurantCard(props) {
  return (
    <div>
      <Container >
        <Row>
          {props.cityRest.map((item, index) => (
            <Row key={index} className="w-50 my-3  mx-auto">

              <Col xs={12} sm={12} md={12} lg={6} xl={4}>
                {item.restaurant.featured_image ? (
                  <Image
                    className="my-3 mx-1 rounded-3 border border-dark"
                    style={{ width: "170px", height: "120px" }}
                    src={item.restaurant.featured_image}
                    
                    
                  />
                ) : (
                    <Image
                      style={{ width: "170px", height: "120px" }}
                      src="https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png?output-format=webp%22"
                      className="my-3 mx-2 rounded-3 border border-dark"
                      
                    />
                  )}
              </Col>
              <Col xs={12} sm={12} md={0} lg={6} xl={8} className="pt-3" >
                <h3 className="text-dark fs-5 font-weight-bold" >{item.restaurant.name}</h3>
                <h6 className="text-dark">Phone Number: {item.restaurant.phone_numbers.slice(0,12)}</h6>
                <h6 className="text-dark">Rating: {item.restaurant.user_rating.aggregate_rating} ({item.restaurant.user_rating.votes})</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e74c3c" class="bi bi-heart-fill mr-3 " viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2c3e50" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                </svg>

              </Col>

            </Row>
          ))}

        </Row>

      </Container>
    </div>
  );
}
