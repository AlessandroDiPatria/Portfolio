import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMongodb,
  SiBitbucket,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: 12, fontWeight: "bold" }}>Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: 12, fontWeight: "bold" }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <p style={{ fontSize: 12, fontWeight: "bold" }}>Mongo Compass</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBitbucket />
        <p style={{ fontSize: 12, fontWeight: "bold" }}>BitBucket</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
