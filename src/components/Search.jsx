import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import {
  Card,
  Row,
  Col,
  Button,
  Container,
  Image,
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
        "user-key": "415c9b42482714e36aa1e285b7ab62be",
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
        /*
                console.log(result.location_suggestions[0].id);
                */
        getCityRest(result.location_suggestions[0].id);
        // setCity(result.location_suggestions[0].id);
        /*
                console.log(city);
                */
      })
      .catch((error) => console.log("error", error));
  }

  function getCityRest(event) {
    var requestOptions = {
      method: "GET",
      headers: {
        "user-key": "415c9b42482714e36aa1e285b7ab62be",
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
        /*
                console.log(result.location_suggestions[0].id);
                */
        setCityRest(result.restaurants);
        // console.log(result)
        // console.log(`cityRest:: ${cityRest}`);
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    getCityID();
  }, []);

  return (
    <div>
      <Row className=" justify-content-center align-items-center m-0 p-0">
        <Col sm={8}>
          <InputGroup className="m-0 p-0" as={Form} onSubmit={handleSubmit}>
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
      <RestaurantCard cityRest={cityRest} />
    </div>
  );
}

export default Search;

/* 
<h1>Efekan</h1>
            <h1>{query}</h1>
            <h5>{data.map((item,index)=> (
                <div key={index} >
                    <p>{item.restaurant.name}</p>
                </div>
            ))}</h5>
*/

/* 
useEffect(() => {
         var requestOptions = {
             method: 'GET',
             headers: {
                 "user-key": "415c9b42482714e36aa1e285b7ab62be",
                 "content-type": "application/json",
               },
             redirect: 'follow'
         };

         fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${city}&entity_type=city&sort=rating&order=dsc`, requestOptions)
             .then(response => response.json())
             .then(result =>{
                 setData(result.restaurants);
                 console.log(result.restaurants);
             })
             .catch(error => console.log('error', error));
            
     }, [])

*/
