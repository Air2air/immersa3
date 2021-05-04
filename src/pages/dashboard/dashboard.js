import React from "react";
import { Card, Row, Col, Dropdown, DropdownButton, ButtonToolbar, Button } from "react-bootstrap";
import BarChart from "../../components/charts/barChart";
import CalendarChart from "../../components/charts/calendarChart";
import PieChart from "../../components/charts/pieChart";
import { BsFillGearFill } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";

export default function DashboardPage() {
  return (
    <>
      <Row>
        <Col className="d-flex justify-content-between">
          <h4 className="mb-4">Dashboard</h4>
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


      <Row>
        <Col xs={6}>
          <Card bg="info" text="white" style={{ height: "450px" }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }} className="mt-3">
                Issues sent - by department
              </Card.Title>
              <BarChart />
            </Card.Body>
            <Row>
              <Col className="d-flex align-items-center justify-content-between m-4">
                <BsFillGearFill size="1.5em" />
                <FaShareAlt size="1.5em" />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={6}>
          <Card bg="danger" text="white" style={{ height: "450px" }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }} className="mt-3">
                Employee response rates up 6%
              </Card.Title>
              <PieChart />
              <Row>
              <Col xs={12} className="d-flex align-items-center justify-content-end m-2 caption">
                  <ButtonToolbar className="justify-content-end">
                    <Button variant="secondary" className="mr-3">
                      Refresh
                    </Button>
                    <Button variant="warning">Optimize</Button>
                  </ButtonToolbar>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12} className="mt-4">
          <Card bg="primary" text="white">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }} className="mt-3">
                Responses - all departments
              </Card.Title>
              <CalendarChart />
              <Row>
                <Col className="d-flex justify-content-between p-2 px-4">
                  <BsFillGearFill size="1.5em" />
                  <FaShareAlt size="1.5em" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
