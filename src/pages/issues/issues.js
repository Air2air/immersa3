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
import { BiTimeFive } from "react-icons/bi";
import { FaUser, FaChevronDown } from "react-icons/fa";
import issuesJson from "./../../data/data.json";

const data = issuesJson;

const eachDepartment = data.map((category) => {
  const departmentIssuesList = category.issues.map(function (item) {
    return (
      // Inner loop
      <ListGroup.Item className="py-2" key={item.id}>
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
  return (
    // Outer loop
    <>
      <Accordion className="mb-2">
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
                  {departmentIssuesList.length}
                </Badge>
                <div>{category.department}</div>
              </div>
              <FaChevronDown className="mr-2" />
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={category.id}>
            <Card.Body className="p-2">
              <ListGroup variant="flush">{departmentIssuesList}</ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
});

export default function IssuesPage() {
  return (
    <>
      <Row>
        <Col className="d-flex justify-content-between">
          <h4 className="mb-4">Issues</h4>
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
      <div className="categories">{eachDepartment}</div>
      <p className="mt-4">Click a department to see more.</p>
    </>
  );
}
