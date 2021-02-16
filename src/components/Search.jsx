import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import SearchInput from "./SearchInput";
import FetchRestaurant from "./FetchRestaurant";

function Search(props) {
  const params = useParams();
  const { query, category } = params;

  return (
    <div className="searchback">
      <Row className=" justify-content-center align-items-center m-0 py-5">
        <Col sm={8}>
          <SearchInput />
        </Col>
      </Row>
      <FetchRestaurant query={query} category={category} />
    </div>
  );
}

export default Search;
