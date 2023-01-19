import React from "react";
import { Col, Container, Tab, Row, Nav } from "react-bootstrap";

import "../Images/Projects/Open-Weather-API-Handler.png";

import projImg1 from "../Images/Projects/Bee-Game-Preview.png";
import projImg2 from "../Images/Projects/Open-Weather-API-Handler.png";
import projImg3 from "../Images/Projects/PowerApps3.png";
import projImg4 from "../Images/Projects/NextCord-Logo.png";
import projImg5 from "../Images/Projects/2277078523_dfa9cb9a76_c.jpg";
import projImg6 from "../Images/Projects/React-icon.svg.png";

import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { ProjectCard } from "./ProjectCard";

import "./Projects.scss";

function Projects() {
  const projects = [
    {
      title: "Platformer Bee Game",
      description:
        "Created a platformer game from scratch utilizing Piskel as well as the Greenfoot framework.",
      imgUrl: projImg1,
      imgLink: "https://www.greenfoot.org/scenarios/30444",
      eventKey: 3,
    },
    {
      title: "Python Weather Api Handler",
      description:
        "Created a API handler that could tell the Open Weather API to return various information in relation to certain zip codes around the USA.",
      imgUrl: projImg2,
      imgLink:
        "https://github.com/Omar-Alabdalla/Programming-Fundamentals/tree/master/Final%20Project",
      eventKey: 3,
    },
    {
      title: "GenCyber Cyber Security Bootcamp",
      description:
        "Learned various topics that are fundamental to the cybersecurity career path, as well as implemented them in practice to prove that I retained all the knowledge gained",
      imgUrl: projImg5,
      imgLink: "https://www.gen-cyber.com/about/",
      eventKey: 1,
    },
    {
      title: "Discord Bot",
      description:
        "Utilized all my previous knowledge of programming to create a robust Discord Bot with many features",
      imgUrl: projImg4,
      imgLink:
        "https://discord.com/api/oauth2/authorize?client_id=930623441340596235&permissions=277062340352&scope=bot",
      eventKey: 1,
    },
    {
      title: "DIY Project",
      description:
        "Created many programs to aid the process of uploading and managing company documents to their SharePoint database.",
      imgUrl: projImg3,
      imgLink: "https://www.mazuma.org/",
      eventKey: 2,
    },
    {
      title: "Personal Portfolio",
      description:
        "Created a website to portray all my previous experience as well as teach me advanced web development concepts.",
      imgUrl: projImg6,
      imgLink: "https://omar-alabdalla.github.io/Personal-Portfolio/#/",
      eventKey: 1,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              Below you will can see the various projects I have done organized
              by whether I did them for a company, myself, or school.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Personal Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Professional Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Education Projects</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      if (project.eventKey === 1) {
                        return <ProjectCard key={index} {...project} />;
                      }
                      return null;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.map((project, index) => {
                      if (project.eventKey === 2) {
                        return <ProjectCard key={index} {...project} />;
                      }
                      return null;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects.map((project, index) => {
                      if (project.eventKey === 3) {
                        return <ProjectCard key={index} {...project} />;
                      }
                      return null;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
