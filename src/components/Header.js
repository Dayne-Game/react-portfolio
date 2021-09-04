import React, { useEffect, useState, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ArrowRightIcon } from "@heroicons/react/solid";

const Header = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <Navbar variant={navBackground ? "dark" : "light"} expand="lg" fixed="top" style={{ transition: ".5s ease", backgroundColor: navBackground ? "#ef496f" : "transparent" }} collapseOnSelect>
        <Container>
          <Navbar.Brand>Dayne Game</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="./resume.pdf" download="Dayne-Game-CV" className="hire-me-button">
                Resume <ArrowRightIcon className="ml-1 w-4 h-4 right-icon" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
