import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import ProjectCard from "./ProjectCard";
import screenShot from "../assets/img/Screenshot 2024-11-20 010755.png";
import screenShot3 from "../assets/img/Screenshot 2024-11-20 010245.png";
import screenShot2 from "../assets/img/Screenshot 2024-11-20 012017.png";
import screenShot4 from "../assets/img/Screenshot 2024-11-20 010524.png";
import screenShot5 from "../assets/img/Screenshot (237).png";
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
  const projects = [
    {
      title: "CarWash",
      description: "UI Design",
      imgUrl: screenShot,
    },
    {
      title: "Roll a ball",
      description: "Game Development",
      imgUrl: screenShot5,
    },
    {
      title: "Small Town",
      description: "Computer Graphic",
      imgUrl: screenShot2,
    },
    {
      title: "PetShop",
      description: "Web Design",
      imgUrl: screenShot3,
    },
    {
      title: "Coffee Shop",
      description: "FrontEnd",
      imgUrl: screenShot4,
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
