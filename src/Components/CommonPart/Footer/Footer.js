import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-part bg-light">
      <Container>
        <Row className="g-5">
          <Col md={3} sm={6} xs={12}>
            <div className="footer-title pb-4">
              <h4 className="text-uppercase">About Us</h4>
            </div>
            <div className="footer-first-text">
              <p>
                <span className="text-danger fw-bold fs-5">
                  Creative Academy
                </span>{" "}
                Is An Online Learning Platform Which Will Give You The Best
                Teacher's Classes Among The Country.
              </p>
            </div>
            <div className="footer-first-social pt-4">
              <a href="/">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="/">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="/">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="/">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <div className="footer-title pb-4">
              <h4 className="text-uppercase">Quicklinks</h4>
            </div>
            <div className="footer-second-side">
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12}></Col>
          <Col md={3} sm={6} xs={12}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
