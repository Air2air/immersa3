import React from "react";
import {
  Accordion,
  Card,
  Button,
  ButtonToolbar,
  ListGroup,
  Row,
  Col,
  Badge,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import Panel from "../../components/panel/panel";
import { BiTimeFive } from "react-icons/bi";
import { CgMonday } from "react-icons/cg";
import {
  FaUser,
  FaChevronDown,
  FaSalesforce,
  FaSlack,
  FaGithub,
} from "react-icons/fa";
import setupJson from "./../../data/setup.json";

const data = setupJson;

const eachSetup = data.map((category) => {
  const SetupList = category.nodes.map(function (item) {
    return (
      <ListGroup.Item className="py-2" ref={item.id} key={item.id}>
        <Row>
          <Col xs={6} className="d-flex align-items-center caption py-2">
            <BiTimeFive className="mr-2" style={{ fill: "lightgray" }} />
            {item.dateTime}
          </Col>
          <Col
            xs={6}
            className="d-flex justify-content-end align-items-center caption py-2"
          >
            <FaUser className="mr-2" style={{ fill: "lightgray" }} />
            Mgr:&nbsp;
            {item.manager}
          </Col>
        </Row>
        <Row>
          <Col className="py-3">
            <h5>{item.name}</h5>
            <p>{item.description}</p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex align-items-center py-2 mb-3 caption">
            <Badge pill variant="secondary" className="mr-2">
              {item.responses}
            </Badge>
            Responses received
          </Col>
          <Col className=" py-2 mb-3">
            <ButtonToolbar className="justify-content-end">
              <Button variant="danger" className="mr-3">
                Delete
              </Button>
              <Button variant="primary">Resend</Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  });

  function GetIcon(props) {
    switch (props.value) {
      case "FaSalesforce":
        return <FaSalesforce />;
      case "FaSlack":
        return <FaSlack />;
      case "FaGithub":
        return <FaGithub />;
      case "CgMonday":
        return <CgMonday />;
      default:
        return null;
    }
  }

  return (
    // Outer loop
    <Accordion className="mb-2" key={category.id}>
      <Card>
        <Card.Header className="p-2">
          <Accordion.Toggle
            as={Card.Body}
            variant="link"
            eventKey={category.id}
            className="d-flex action align-items-center justify-content-between p-2"
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex align-items-center justify-content-between">
              <Badge pill variant="danger" className="mr-4">
                {SetupList.length}
              </Badge>
              <div>{category.application}</div>
              <GetIcon value={category.icon} />
            </div>
            <FaChevronDown className="mr-2" />
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={category.id}>
          <Card.Body className="p-2">
            <ListGroup variant="flush">{SetupList}</ListGroup>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
});

export default function SetupPage() {
  return (
    <>
      <Panel></Panel>
      <Row>
        <Col className="d-flex justify-content-between">
          <h4 className="mb-4">Setups</h4>
          <DropdownButton
            variant="outline-secondary"
            id="dropdown-item-button"
            title="This week"
          >
            <Dropdown.Item as="button">Last 14 days</Dropdown.Item>
            <Dropdown.Item as="button">Last 30 days</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <div className="categories">{eachSetup}</div>
      <p className="mt-4">Click a application to see more.</p>
    </>
  );
}
