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
  const [value, setValue] = React.useState(query);

  function handleSubmit(event) {
    setValue(value.toLowerCase());
    categoryID
      ? history.push(`/search/${value}/${categoryID}`)
      : history.push(`/search/${value}`);
  }

  function handleInputChange(event) {
    setValue(event);
  }
  return (
    <Container>
      <Row className="text-center  justify-content-center align-items-center mt-4 ">
        <InputGroup
          className="text-center justify-content-center mx-auto "
          as={Form}
          onSubmit={handleSubmit}
        >
          <Col className="p-0" lg={6} xs={12} sm={12} md={6} xl={6}>
            <InputGroup.Append>
              <span
                className="input-group-text border-0 iconbg searchbar m-0 p-0"
                id="search-addon"
              >
                <i className="fas fa-map-marker-alt icon"></i>

                <input
                  required
                  type="search"
                  className="form-control-search searchcolor"
                  // placeholder={query}
                  value={value}
                  aria-label="Search"
                  onChange={(event) => {
                    // setValue(event.target.value);
                    handleInputChange(event.target.value);
                  }}
                  aria-describedby="search-addon"
                />
              </span>
            </InputGroup.Append>
          </Col>
          <Col className="p-0 " lg={6} xs={12} sm={12} md={6} xl={6}>
            <InputGroup.Append>
              <div className="btn-group search-btn-group mx-0" role="group">
                <CategoriesButton
                  categorylang={categorylang}
                  setCategoryName={setCategoryName}
                  setCategoryID={setCategoryID}
                  className=" rounded-0 button-round btn"
                />
                <Button type="submit" className="w-50 button-round btn">
                  {t("search.1")}
                </Button>
              </div>
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
