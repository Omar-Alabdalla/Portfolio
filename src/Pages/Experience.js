import React from "react";

import { Col, Container, Tab, Row, Nav } from "react-bootstrap";

import "./Experience.scss";

import { ProjectCard } from "./ProjectCard";

function Experience() {
  const projects = [
    {
      Employer: "Walmart",
      Position: "Digital Order Fulfillment",
      Term_Served: "09/14/2020 - 01/01/2022",
      Description:
        "Maintained optimal financial controls by following loss prevention procedures and protecting cash assets. Served customers with knowledge, and friendly support at every stage of shopping and purchasing. Merchandised attractive shelf displays with current offerings to drive store sales",
    },
    {
      Employer: "Code Ninjas",
      Position: "Coding Instructor",
      Term_Served: "01/01/2022 - 05/14/2022",
      Description:
        "Taught, guided, and mentored students on fundamental coding and software development concepts. Lead a group of students to ensure that they were all working at their best potential. Provided support and ensured students understood the course material.",
    },
    {
      Employer: "Mazuma Credit Union",
      Postion: "Software Developer Intern",
      Term_Served: "05/14/2022 - Present",
      Description:
        "Developed, programs to upload and integrate company databases to SharePoint utilizing RESTful API. Managed SharePoint API to create programs to automate web page creation to embed company files. Created programs to search for key words within company document sets.",
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

export default Experience;
