import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { InputGroup, Form, FormControl, Button } from "react-bootstrap";
import CategoriesButton from "./CategoriesButton";

function SearchInput() {
  const params = useParams();
  const { query, category } = params;
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
          className="input-search m-0 p-2"
          placeholder={query}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <InputGroup.Append>
          <CategoriesButton
            setCategoryName={setCategoryName}
            setCategoryID={setCategoryID}
          />
        </InputGroup.Append>
        <InputGroup.Append>
          <Button variant="dark" type="submit">
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default SearchInput;
