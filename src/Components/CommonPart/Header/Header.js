import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="nav-part">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/home" className="nav-logo">
            Creative Academy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 nav-menu"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                to="/home"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "black" : "gray",
                    textDecoration: isActive ? "underline" : "none",
                  };
                }}
              >
                Home
              </NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/faq">FAQ</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
