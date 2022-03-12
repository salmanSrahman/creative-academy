import React from "react";
import "./Enroll.css";
import enroll from "../../../../../images/enroll.svg";
import { Col, Container, Row } from "react-bootstrap";

const Enroll = () => {
  return (
    <div className="pb-5">
      <Container>
        <Row>
          <Col md={6} className="mx-auto">
            <img src={enroll} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Enroll;
