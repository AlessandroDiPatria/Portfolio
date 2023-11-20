import Toast from "react-bootstrap/Toast";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Particle from "../Particle";
import reply from "./Images/reply_logo.jpeg";
import mitsoftware from "./Images/mitsoftware.png";
import handcoding from "./Images/handcoding.svg";
function Work() {
  const bar = {
    height: "100%" /* Adjust the height of the line */,
    width: "2px" /* Adjust the width of the line */,
    backgroundColor: "#000" /* Adjust the color of the line */,
    margiRight: "20px",
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 style={{ marginBottom: "10%" }} className="purple">
          Work Experience
        </h1>

        <Row style={{ textAlign: "left" }}>
          <Col md={5}>
            <img
              src={reply}
              style={{
                width: 250,
                height: 250,
                borderRadius: 20,
                position: "relative",
              }}
            ></img>
          </Col>
          <Col md={2}></Col>
          <Col md={5}>
            <h2>Software Engineer</h2>
            <p>
              <span style={{ fontWeight: "bold" }} className="purple">
                Reply S.p.a
              </span>
            </p>
            <p style={{ fontSize: 14, color: "lightgray" }}>
              <i>Feb 2023 - Now </i>
            </p>
            <p>
              Developed Web interfaces for managing Nexi Digital Customer in
              React Typescript, Angular, Javascript and Jest. Agile Workflow and
              GitHub Flow
            </p>
            <ListGroup
              style={{
                fontSize: 12,
                alignContent: "center",
                marginTop: 10,
                width: "80%",
                marginBottom: 10,
              }}
              horizontal
            >
              <ListGroup.Item
                style={{
                  backgroundColor: "#61DBFB",
                  color: "black",
                }}
                variant="success"
              >
                React
              </ListGroup.Item>
              <ListGroup.Item
                style={{ backgroundColor: "#007acc", color: "white" }}
                variant="warning"
              >
                Typescript
              </ListGroup.Item>
              <ListGroup.Item
                style={{ backgroundColor: "#F1502F", color: "white" }}
                variant="info"
              >
                Git
              </ListGroup.Item>
              <ListGroup.Item
                style={{ backgroundColor: "#EEC5B9", color: "black" }}
                variant="info"
              >
                Jest
              </ListGroup.Item>
            </ListGroup>
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
          <Col md={5}>
            <h2>Web | Blockchain Developer</h2>
            <p>
              <span style={{ fontWeight: "bold" }} className="purple">
                MitSoftware.com
              </span>
            </p>
            <p style={{ fontSize: 14, color: "lightgray" }}>
              <i>Oct 2022 - Feb 2023 </i>
            </p>
            Deployed Blockchain full-stack Web application in React, javascript,
            Css, Solidity, Web3.js.
            <ListGroup
              style={{
                fontSize: 12,
                alignContent: "center",
                marginTop: 10,
                width: "80%",
                marginBottom: 10,
              }}
              horizontal
            >
              <ListGroup.Item
                style={{ backgroundColor: "#61DBFB", color: "black" }}
                variant="success"
              >
                React
              </ListGroup.Item>
              <ListGroup.Item
                style={{ backgroundColor: "#F0DB4F", color: "black" }}
                variant="warning"
              >
                Javascript
              </ListGroup.Item>
              <ListGroup.Item
                style={{ backgroundColor: "#88aaf1", color: "black" }}
                variant="info"
              >
                Solidity
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={2}></Col>
          <Col md={5}>
            <img
              src={mitsoftware}
              style={{
                width: 250,
                height: 250,
                position: "relative",
                borderRadius: 20,
              }}
            ></img>
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
          <Col md={5}>
            <img src={handcoding} style={{ width: 350, height: 250 }}></img>
          </Col>
          <Col md={2}></Col>
          <Col md={5}>
            <h2>Freelance developer</h2>
            <p></p>
            <p style={{ fontSize: 14, color: "lightgray" }}>
              <i>Sep 2021 - Now </i>
            </p>
            <p>Developed customized web solutions for private clients.</p>
            <ListGroup
              style={{
                fontSize: 12,
                alignContent: "center",
                marginTop: 10,
                width: "80%",
                marginBottom: 10,
              }}
              horizontal
            >
              <ListGroup.Item
                style={{ backgroundColor: "#e34c26", color: "white" }}
                variant="success"
              >
                HTML
              </ListGroup.Item>
              <ListGroup.Item
                style={{ backgroundColor: " #264de4", color: "white" }}
                variant="info"
              >
                CSS
              </ListGroup.Item>
              <ListGroup.Item
                style={{ backgroundColor: "#F0DB4F", color: "black" }}
                variant="warning"
              >
                Javascript
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Work;
