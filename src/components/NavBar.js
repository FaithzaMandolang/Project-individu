import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { getDatabase, ref, onValue } from "firebase/database";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [NavBar, setNavBar] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const NavBarRef = ref(db, "Navbar/");
    onValue(
      NavBarRef,
      (snapshot) => {
        const data = snapshot.val();
        setNavBar(data);
      },
      []
    );
  });

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={`data:image/jpeg;base64,${NavBar.logo}`} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#">
                  <img
                    src={`data:image/jpeg;base64,${NavBar.linkedin}`}
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    src={`data:image/jpeg;base64,${NavBar.facebook}`}
                    alt=""
                  />
                </a>
                <a href="#">
                  <img src={`data:image/jpeg;base64,${NavBar.ig}`} alt="" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

export default NavBar;
