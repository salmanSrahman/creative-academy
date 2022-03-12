import React from "react";
import "./NotFound.css";
import notFound from "../../images/404.gif";
import { Col, Container, Row } from "react-bootstrap";

const NotFound = () => {
  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col md={6} className="mx-auto">
            <img src={notFound} alt="" className="img-fluid mx-auto" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
