import React from "react";
import { Navbar, Nav, FormControl, Button, InputGroup } from "react-bootstrap";
import { BsFillGearFill } from "react-icons/bs";
import { FaBell, FaUserAlt } from "react-icons/fa";
import SearchBar from "./../searchbar/searchbar";
import "./styles.scss";

function Header() {
  return (
    <>
      <Navbar className="d-flex justify-content-between align-items-center p-4 mb-4">
        <Nav className="mr-auto pl-0">
          <SearchBar />
        </Nav>

        <Nav className="ml-auto">
          <FaBell size="1.5em" className="mx-4" style={{ fill: "#AAA" }} />
          <BsFillGearFill
            size="1.5em"
            className="mx-4"
            style={{ fill: "#AAA" }}
          />
          <FaUserAlt size="1.5em" className="ml-4" style={{ fill: "#AAA" }} />
          <p className="mx-2">Todd Dunning</p>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;
