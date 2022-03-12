import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./About.css";
import aboutImg from "../../images/services.png";
import "./About.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-part">
      <Container>
        <Row className="g-4">
          <Col md={6}>
            <img src={aboutImg} alt="" className="img-fluid" />
          </Col>
          <Col md={6}>
            <div className="about-text">
              <h3>
                <span className="text-danger">Creative Academy</span> is one of
                the Biggest Online Learning Platform of Bangladesh.
              </h3>
              <p className="text-secondary fs-5 lh-base my-3">
                Here you can get the best teachers of Bangladesh. You can choose
                your week subject and join that class. In Aimers, you can not
                only attend the classed. You have to give some exam according to
                your enrolled subject or lesson. You can also watch your
                favourite teacher's class here. You can take preperatiion of
                Admission, HSC, SSC etc.
              </p>
              <Button
                variant="danger"
                onClick={() => {
                  navigate("/services");
                }}
              >
                Get Started
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
