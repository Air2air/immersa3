import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { BsFillGearFill } from "react-icons/bs";
import { FaShareAlt, FaDownload } from "react-icons/fa";
import "./styles.scss";

function PanelButtons() {
  return (
    <div className="panel-buttons d-flex flex-column">
      <Button className="settings my-2">
        <BsFillGearFill />
      </Button>
      <Button className="share my-2">
        <FaShareAlt />
      </Button>
      <Button className="download  my-2">
        <FaDownload />
      </Button>
    </div>
  );
}

export default function Panel() {
  return (
    <Row className="panel d-flex justify-content-between align-items-center">
      <Col className="panel-col">Panel</Col>
      <PanelButtons />
    </Row>
  );
}
