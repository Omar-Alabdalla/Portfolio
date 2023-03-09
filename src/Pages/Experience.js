import React from "react";

import { Col, Container, Tab, Row, Nav } from "react-bootstrap";

import projImg1 from "../Images/Experience/Code Ninjas.png";
import projImg2 from "../Images/Experience/Mazuma Logo.png";
import projImg3 from "../Images/Experience/BVW Logo.png";
import projImg4 from "../Images/Experience/Johnson_County_Cavaliers_logo.svg.png";
import projImg5 from "../Images/Experience/UTD Logo.png";
import projImg6 from "../Images/Experience/OpenWeather.png";
import projImg7 from "../Images/Experience/React-icon.svg.png";
import projImg8 from "../Images/Experience/VS Code Projects.png";

import "./Experience.scss";

import { ProjectCard } from "./experienceCard";

function Experience() {
  const projects = [
    {
      title: "Coding Instructor",
      description:
        "Taught, guided, and mentored students on fundamental coding and software development concepts. Lead a group of students to ensure that they were all working at their best potential. Provided support and ensured students understood the course materials",
      imgUrl: projImg1,
      imgLink: "https://www.codeninjas.com/",
      eventKey: 1,
    },
    {
      title: "Software Developer Intern",
      description:
        "Developed programs to upload and integrate company databases to SharePoint utilizing RESTful API. Managed SharePoint API to create programs to automate web page creation to embed company files. Created programs to search for key words within company document sets",
      imgUrl: projImg2,
      imgLink: "https://www.mazuma.org/",
      eventKey: 1,
    },

    {
      title: "Blue Valley West High School",
      description: "This is the high school that I graduated from.",
      imgUrl: projImg3,
      imgLink: "https://www.bluevalleyk12.org/BVW",
      eventKey: 2,
    },
    {
      title: "Johnson County Community College",
      description:
        "I went to Johnson County Community College during high school for dual credit courses and attended it for my freshman year of college.",
      imgUrl: projImg4,
      imgLink: "https://www.jccc.edu/",
      eventKey: 2,
    },
    {
      title: "University of Texas at Dallas",
      description:
        "I plan on transferring to UTD to finish my BS in Computer Science.",
      imgUrl: projImg5,
      imgLink: "https://www.utdallas.edu/",
      eventKey: 2,
    },
    {
      title: "Open Weather API",
      description:
        "I am currently working on using restful APIs to return the weather of the user of the website using geolocation api to enhance the home page.",
      imgUrl: projImg6,
      eventKey: 3,
    },
    {
      title: "Personal Portfolio Site",
      description:
        "I am planning on learning react native to enhance the mobile experience for this site.",
      imgUrl: projImg7,
      eventKey: 3,
    },
    {
      title: "Java Project",
      description: "I want to create a large scale project using Java.",
      imgUrl: projImg8,
      eventKey: 3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Experience</h2>
            <p>
              Below you will see all my various education/work experiences as
              well as some personal goals I have for myself.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Work Experience</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Educational Experience</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Current Goals</Nav.Link>
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

export default Experience;
