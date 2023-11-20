import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiAngularSimple,
  DiPython,
  DiGit,
  DiBootstrap,
  DiJava,
  DiHtml5,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiTypescript,
  SiEthereum,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{ fontSize: 12, fontWeight: "bold" }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: 12, fontWeight: "bold" }}>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <p style={{ fontSize: 12, fontWeight: "bold" }}>Typescript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p style={{ fontSize: 12, fontWeight: "bold" }}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: 12, fontWeight: "bold" }}>React</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: 12, fontWeight: "bold" }}>Node JS</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
        <p style={{ fontSize: 12, fontWeight: "bold" }}>Angular</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />

        <p style={{ fontSize: 12, fontWeight: "bold" }}>Solidity</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{ fontSize: 12, fontWeight: "bold" }}>Github Flow</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <p style={{ fontSize: 12, fontWeight: "bold" }}>Bootstrap</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiEthereum />
        <p style={{ fontSize: 12, fontWeight: "bold" }}>Ethereum</p>
      </Col>
    </Row>
  );
}

export default Techstack;
