import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const [Project, setProject] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const ProjectRef = ref(db, "project/");
    onValue(
      ProjectRef,
      (snapshot) => {
        const data = snapshot.val();
        setProject(data);
      },
      []
    );
  });
  const [Projectcard, setProjectcard] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const ProjectcardRef = ref(db, "Projectcards/");
    onValue(
      ProjectcardRef,
      (snapshot) => {
        const data = snapshot.val();
        setProjectcard(data);
      },
      []
    );
  });
  const projects = [
    {
      title: "CarWash",
      description: "UI Design",
      imgUrl: `data:image/jpeg;base64,${Projectcard.projek2}`,
    },
    {
      title: "Small City",
      description: "Computer Graphic",
      imgUrl: `data:image/jpeg;base64,${Projectcard.projek3}`,
    },
    {
      title: "PetShop",
      description: "Web Design",
      imgUrl: `data:image/jpeg;base64,${Projectcard.projek1}`,
    },
    {
      title: "Roll a Ball",
      description: "Game Development",
      imgUrl: `data:image/jpeg;base64,${Projectcard.projek4}`,
    },
    {
      title: "Coffee Shop",
      description: "FrontEnd",
      imgUrl: `data:image/jpeg;base64,${Projectcard.projek5}`,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>{Project.title}</h2>
                  <p>{Project.intro}</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
export default Projects;
