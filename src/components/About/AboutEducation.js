import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Container, Row, Col } from "react-bootstrap";
import logoSap from "../../Assets/sapienza_icon.png";
function AboutEducation() {
  return (
    <Card className="quote-card-view">
      <Card.Body style={{ paddingTop: "5%", paddingBottom: "5%" }}>
        <Row style={{ textAlign: "left" }}>
          <Col
            md={3}
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <img src={logoSap} style={{ width: 300, height: 200 }}></img>
          </Col>
          <Col md={9}>
            <h2>"La Sapienza" University</h2>
            <p>
              <span style={{ fontWeight: "bold" }} className="purple">
                Master of Science in Computer Science
              </span>
            </p>
            <p style={{ fontSize: 12 }}>
              <i>GPA 110/110 with Honors</i>
            </p>
            <p>September 2021 - October 2023</p>
            <p>
              Best Marks : Big Data 30/30, Computer Vision 30/30, Multimodal{" "}
            </p>
            <p>
              Thesis : “URL and Token patterns in Ethereum and Binance Smart
              Chain”.
            </p>
          </Col>
        </Row>
        <hr
          style={{
            marginTop: "3%",
            marginBottom: "3%",
            height: 2,
            backgroundColor: "orange",
            opacity: 1,
          }}
        ></hr>
        <Row style={{ textAlign: "left" }}>
          <Col md={3}>
            <img src={logoSap} style={{ width: 300, height: 200 }}></img>
          </Col>
          <Col md={9}>
            <h2>"La Sapienza" University</h2>
            <p>
              <span style={{ fontWeight: "bold" }} className="purple">
                Computer Science bachelor's degree
              </span>
            </p>
            <p>September 2018 - October 2021</p>
            <p>
              Best Marks : Web Development 30/30, Functional and Parallel
              Programming 30/30.
            </p>
            <p>Thesis : “NFTs and Smart contracts in Algorand”.</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default AboutEducation;
