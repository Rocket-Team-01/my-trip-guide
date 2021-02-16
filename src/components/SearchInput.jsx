import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { InputGroup, Form, FormControl, Button } from "react-bootstrap";
import CategoriesButton from "./CategoriesButton";
import { useTranslation } from "react-i18next";


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
    <div>
      <InputGroup className="m-0 p-0" as={Form} onSubmit={handleSubmit}>
        <FormControl
          required
          className="input-search m-0 p-2"
          placeholder={query}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <InputGroup.Append>
          <CategoriesButton
            categorylang = {categorylang}
            setCategoryName={setCategoryName}
            setCategoryID={setCategoryID}
          />
        </InputGroup.Append>
        <InputGroup.Append>
          <Button variant="dark" type="submit">
          {t("search.1")}
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default SearchInput;
