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
              <NavLink
                to="/about"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "black" : "gray",
                    textDecoration: isActive ? "underline" : "none",
                  };
                }}
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "black" : "gray",
                    textDecoration: isActive ? "underline" : "none",
                  };
                }}
              >
                Services
              </NavLink>
              <NavLink
                to="/faq"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "black" : "gray",
                    textDecoration: isActive ? "underline" : "none",
                  };
                }}
              >
                FAQ
              </NavLink>
              <NavLink
                to="/contact"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "black" : "gray",
                    textDecoration: isActive ? "underline" : "none",
                  };
                }}
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
