import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import training from "../../Assets/Projects/training.png";
import sentiment from "../../Assets/Projects/sentiment.png";
import landingPage from "../../Assets/Projects/landingPage.png";
import drink from "../../Assets/Projects/drinkRecommandation.jpeg";
import weshare from "../../Assets/Projects/weshare.png";
import blockchainApp from "../../Assets/Projects/blockchainApp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={training}
              isBlog={false}
              title="Gym AI Apps"
              description="The AI Gym Tracker project represents an innovative web application that harnesses the power of artificial intelligence to track and monitor users’ physical activities during their workout sessions. "
              ghLink="https://github.com/AlessandroDiPatria/GymAI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landingPage}
              isBlog={false}
              title="Interactive 3D Landing Page"
              description="A landing page is a standalone web page, created specifically for the purpose of a marketing or advertising campaign. It is designed to direct the visitor to take a specific action, such as making a purchase or filling out a form for more information."
              ghLink="https://github.com/AlessandroDiPatria/Interactive3DLandingPage"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drink}
              isBlog={false}
              title="Drinks Recommendation system"
              description="Drinks recommendation system: Uses Collaborative Filtering and Content-Based Filtering to assist users in making choices based on preferences and characteristics."
              ghLink="https://github.com/AlessandroDiPatria/BeerRecommendationBigData"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weshare}
              isBlog={false}
              title="We Share!"
              description="WeShare is a Mobile Application that you can use to share quickly your contact profile with other people by simply clicking a button and placing phones nearby. You are free to customize your profile adding the information that you want, creating more than one profiles. The application let you to keep track of all the people you met. 📱"
              ghLink="https://github.com/AlessandroDiPatria/WeShare---application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={false}
              title="Bitcoin Sentimant Analisys"
              description="The project is about predicting the sentiment of tweets about Bitcoin.The dataset choiced contains only few but important features like text,username,Date,Dateonly, Url of the tweet, Retweet by Users, number of likes and finally the label column composed by the following classes: “Positive”,”Negatives” and “Neutral”. "
              ghLink="https://github.com/AlessandroDiPatria/WeShare---application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockchainApp}
              isBlog={false}
              title="Flesh Loan Blockchain App"
              description="The application presented, FlashLoanSwap proposes an innovative system for cryptocurrency arbitrage using a decentralized application called AAVE and a transaction type called FlashLoan. The application will allow the end user to borrow tokens from AAVE and employ them in arbitrage transactions between two Decentralized Exchanges to make a profit."
              ghLink="https://github.com/AlessandroDiPatria/FlashLoanBlockchainApp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
