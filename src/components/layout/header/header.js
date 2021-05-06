import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BsFillGearFill } from "react-icons/bs";
import { FaBell, FaUserAlt } from "react-icons/fa";
import Image from "react-bootstrap/Image";
// import { GoAlert } from "react-icons/go";
// import { AiFillHome } from "react-icons/ai";
// import { RiDashboardFill } from "react-icons/ri";
import "./styles.scss";

function Header() {
  return (
    <>
      <Navbar className="d-flex justify-content-between align-items-center mb-4">
        <Navbar.Brand
          href="#/"
          className="-flex align-items-center header-logo px-5"
        >
          <img
            alt="Immersa"
            height="26"
            src="https://secureservercdn.net/72.167.241.46/jpf.d19.myftpupload.com/wp-content/uploads/2021/03/immersa_logo_fullcolor-2.png"
          />
        </Navbar.Brand>

        <Nav className="d-flex justify-self-center align-items-center">
          <Nav.Link href="#/" className="px-3">
            {/* <AiFillHome className="mr-3" style={{ fill: "#AAA" }} /> */}
            Home
          </Nav.Link>
          <Nav.Link href="#issues" className="px-3">
            {/* <GoAlert className="mr-3" style={{ fill: "#AAA" }} /> */}
            Issues
          </Nav.Link>
          <Nav.Link href="#dashboard" className="px-3">
            {/* <RiDashboardFill className="mr-3" style={{ fill: "#AAA" }} /> */}
            Dashboard
          </Nav.Link>
          <Nav.Link href="#setup" className="px-3">
            {/* <RiDashboardFill className="mr-3" style={{ fill: "#AAA" }} /> */}
            Setup
          </Nav.Link>
        </Nav>

        <Nav className="d-flex ml-auto align-items-center">
          <Nav.Link href="#setup" className="px-3">
            <FaBell size="1.5em" className="" style={{ fill: "#AAA" }} />
          </Nav.Link>
          <Nav.Link href="#setup" className="px-3">
            <BsFillGearFill
              size="1.5em"
              className=""
              style={{ fill: "#AAA" }}
            />
          </Nav.Link>
          <Nav.Link href="#setup" className="px-3">
            <Image
              src="https://pbs.twimg.com/profile_images/1380568370999746560/JFeKWhOx_400x400.jpg"
              roundedCircle
              alt="Immersa"
              height="38"
            />
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;
