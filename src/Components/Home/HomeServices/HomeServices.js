import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useServices from "../../../Hooks/useServices";

import HomeService from "./HomeService/HomeService";
import programCover from "../../../images/program.gif";
import "./HomeServices.css";

const HomeServices = () => {
  const [services] = useServices();
  const fourServices = services.slice(0, 4);
  return (
    <div className="homeServices-part">
      <Container>
        <div className="title d-flex justify-content-center">
          <h1 className="text-color text-center pb-5 text-uppercase">
            Our Best Services
          </h1>
        </div>
        <Row className="g-2">
          <Col
            md={5}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={programCover} alt="" class="img-fluid" />
          </Col>
          <Col md={7}>
            <Row className="g-4">
              {fourServices.map((service) => (
                <HomeService key={service.id} service={service}></HomeService>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeServices;
