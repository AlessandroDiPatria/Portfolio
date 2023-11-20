import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p
            style={{
              justifyContent: "center",
              /* textAlign: "justify"  */
            }}
          >
            Hi Everyone, I am{" "}
            <span className="purple">Alessandro Di Patria </span>
            from <span className="purple"> Rome, Italy.</span>
            <br />I am currently employed as a software developer at{" "}
            <span className="purple">Reply</span>.
            <br />I am a results-driven Computer Science professional with a
            strong educational foundation, holding Bachelor's and Master's
            degrees from Università{" "}
            <span className="purple">"La Sapienza"</span> Roma. My expertise
            spans various areas, including web development,Machine Leaning and
            Blockchain.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
