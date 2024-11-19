import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import Newsletter from "./Newsletter";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
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
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter />
          <Col size={12} sm={6}>
            <img src={`data:image/jpeg;base64,${NavBar.logo}`} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
