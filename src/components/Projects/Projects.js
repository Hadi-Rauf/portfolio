import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import theaterBooking from "../../Assets/Projects/3.png";
import expenseTracker from "../../Assets/Projects/9.png";
import gitHubFinder from "../../Assets/Projects/firstreactapp.png";
import helloWorld from "../../Assets/Projects/1.png";
import VideoPlayer from "../../Assets/Projects/videoPlayer.png";
import signUpForm from "../../Assets/Projects/2.png";
import Fast_typer from "../../Assets/Projects/11.png";
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
              imgPath={helloWorld}
              isBlog={false}
              title="Hello World"
              description="This is simple hello World"
              ghLink="https://github.com/Hadi-rauf/project-one-Hello-world"
              demoLink="https://my-p1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={signUpForm}
              isBlog={false}
              title="Bits-0f-C0de"
              description="SignUp Form"
              ghLink="https://github.com/Hadi-Rauf/Sign-up-form-my-second-project"
              demoLink="https://my-project2.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gitHubFinder}
              isBlog={false}
              title="Editor.io"
              description="Made With Github Api to Search in Github"
              ghLink="https://github.com/Hadi-Rauf/Final-github-finder"
              demoLink="https://hadi-git-finder.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={theaterBooking}
              isBlog={false}
              title="Theater Booking"
              description="Theater Booking."
              ghLink="https://github.com/Hadi-rauf/Seat-booking-system-my-thrid-project"
              demoLink="https://my-3-project.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VideoPlayer}
              isBlog={false}
              title="Video Player"
              description="Video Player"
              ghLink="https://github.com/Hadi-rauf/Video-player-my-forth-project"
              demoLink="https://my-forth-project.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expenseTracker}
              isBlog={false}
              title="Expense Tracker"
              description="Expense Tracker"
              ghLink="https://github.com/Hadi-rauf/my-10th-project-expense-traker-app"
              demoLink="https://my-10th-project.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fast_typer}
              isBlog={false}
              title="FastTyper"
              description="FastTyper"
              ghLink="https://github.com/Hadi-Rauf/my-project-12-fast-typing-game"
              demoLink="https://my-project-12.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
