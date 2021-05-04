import React from "react";
import { FormControl, Button, InputGroup } from "react-bootstrap";
import "./styles.scss";

function SearchBar() {
  return (
    <>
      <InputGroup className="m-0 p-0">
        <FormControl
          placeholder=" "
          aria-label=" "
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
}

export default SearchBar;
