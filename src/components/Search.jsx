import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import {
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";

function Search(props) {
  const params = useParams();
  const { query } = params;
  let history = useHistory();

  const [cityRest, setCityRest] = useState([]);
  function handleSubmit(event) {
    setValue(value.toLowerCase());
    history.push(`/search/${value}`);
  }
  const [value, setValue] = React.useState("");
  function getCityID() {
    var requestOptions = {
      method: "GET",
      headers: {
        "user-key": "7a5271a9bcd39c98815f81510b921ec4",
        "content-type": "application/json",
      },
      redirect: "follow",
    };

    fetch(
      `https://developers.zomato.com/api/v2.1/cities?q=${query}\n`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        getCityRest(result.location_suggestions[0].id);
      })
      .catch((error) => console.log("error", error));
  }

  function getCityRest(event) {
    var requestOptions = {
      method: "GET",
      headers: {
        "user-key": "7a5271a9bcd39c98815f81510b921ec4",
        "content-type": "application/json",
      },
      redirect: "follow",
    };

    fetch(
      `https://developers.zomato.com/api/v2.1/search?entity_id=${event}&entity_type=city&sort=rating&order=dsc`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setCityRest(result.restaurants); 
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    getCityID();
  },);

  return (
    <div className="searchback" >
      <Row className=" justify-content-center align-items-center m-0 py-5">
        <Col sm={8}>
          <InputGroup className="m-0 p-0 border border-dark rounded-3" as={Form} onSubmit={handleSubmit}>
            <FormControl
              className="input-search m-0 p-2"
              placeholder={query}
              onChange={(event) => {
                setValue(event.target.value);
              }}
            />
            <InputGroup.Append>
              <Button variant="danger">Category</Button>
            </InputGroup.Append>
            <InputGroup.Append>
              <Button variant="dark" type="submit">
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
      <RestaurantCard cityRest={cityRest}/>
    </div>
  );
}

export default Search;

