import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  InputGroup,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import CategoriesButton from "./CategoriesButton";
import { useTranslation } from "react-i18next";
import "../css/Home.css";

function SearchInput(props) {
  const { t } = useTranslation();
  const categorylang = t("search.2");

  const params = useParams();
  const { query } = params;
  let history = useHistory();
  const [categoryName, setCategoryName] = useState();
  const [categoryID, setCategoryID] = useState();
  const [value, setValue] = React.useState("");

  function handleSubmit(event) {
    setValue(value.toLowerCase());
    categoryID
      ? history.push(`/search/${value}/${categoryID}`)
      : history.push(`/search/${value}`);
  }
  return (
    <Container>
      <Row className="  justify-content-center align-items-center mt-4 ">
        <InputGroup
          className="text-center input-search mx-auto"
          as={Form}
          onSubmit={handleSubmit}
        >
          <Col className="p-0" lg={6} xs={12} sm={12} md={6} xl={6}>
            <div className="input-group ">
              <span
                className="input-group-text border-0 iconbg searchbar"
                id="search-addon"
              >
                <i class="fas fa-map-marker-alt icon"></i>
              </span>
              <input
                required
                type="search"
                className="form-control searchcolor"
                placeholder={query}
                aria-label="Search"
                onChange={(event) => {
                  setValue(event.target.value);
                }}
                aria-describedby="search-addon"
              />
            </div>
          </Col>
          <Col className="p-0 " lg={6} xs={12} sm={12} md={6} xl={6}>
            <InputGroup.Append>
              <CategoriesButton
                categorylang={categorylang}
                setCategoryName={setCategoryName}
                setCategoryID={setCategoryID}
                className=" rounded-0 buttonround"
              />
              <Button
                variant="dark"
                type="submit"
                className="w-100 button-round"
              >
                {t("search.1")}
              </Button>
            </InputGroup.Append>
          </Col>
        </InputGroup>
      </Row>
    </Container>
  );
}

export default SearchInput;

/*


<FormControl
              required
              className="h-100 formw mx-auto"
              placeholder={query}
              onChange={(event) => {
                setValue(event.target.value);
              }}
            />

*/
