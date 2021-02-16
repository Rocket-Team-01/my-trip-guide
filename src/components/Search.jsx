import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import SearchInput from "./SearchInput";
import Header from "./Header";
import FetchRestaurant from "./FetchRestaurant";
import "../css/Home.css";

function Search(props) {
  const params = useParams();
  const { query, category } = params;

  return (
    <div className="searchback">
      <Header id="searcheader" />
      <Row className=" justify-content-center align-items-center m-0 py-5">
        <Col sm={8}>
          <SearchInput query={query} />
        </Col>
      </Row>
      <FetchRestaurant query={query} category={category} />
    </div>
  );
}

export default Search;
