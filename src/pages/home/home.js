import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Panel from "../../components/panel/panel";

const HomePage = () => {
  return (
    <>
      <Panel></Panel>
      <Row>
        <h4 className="mb-4">Admin page, first draft </h4>
        <p>This is a very dry first cut at an Admin page.</p>
        <p>
          Doesn't look pretty yet, we would iterate back and forth a lot before
          making it look nice, and doing the responsive views.
        </p>
        <p>
          Check out the <Link to="/dashboard">Dashboard</Link> and{" "}
          <Link to="/issues">Issues list</Link>.
        </p>
      </Row>
      <hr className="my-5" />
      <h4 className="my-5">Next rev notes</h4>
      <Row className="mb-5">
        <Col>
          <ul>
            <li>App is configured by Operations users</li>
            <li>PLugs in to Salesforce and others</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>Uses existing notification channels</li>
            <li>Look and feel proposals</li>
          </ul>
        </Col>
      </Row>

      <hr className="my-5" />

      <h4 className="my-5">1. The Immersa Team</h4>

      <Row>
        <Col>
          <ul>
            <li>Who wants the deliverables; distribution list</li>
            <li>Who wants input</li>
            <li>Frequency of build updates</li>
          </ul>
        </Col>
      </Row>

      <hr className="my-5" />

      <h4 className="my-5">2. Base Requirements</h4>
      <Row>
        <Col>
          <ul>
            <li>Personas and problems: Why are they here</li>
            <li>Assumptions in the user story</li>
            <li>Did we onboard understandably?</li>
            <li>Are we accessible?</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>Our solutions</li>
            <li>Solution result priority</li>
            <li>Progress rewarding</li>
          </ul>
        </Col>
      </Row>

      <hr className="my-5" />
      <h4 className="my-5">First deliverables</h4>
      <Row className="mb-5">
        <Col>
          <ul>
            <li>All pages added with notes</li>
            <li>Component scaffolding</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>Journey map</li>
            <li>Look and feel proposals</li>
          </ul>
        </Col>
      </Row>

      <br />
      <br />
    </>
  );
};

export default HomePage;
