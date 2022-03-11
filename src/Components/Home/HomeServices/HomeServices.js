import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useServices from "../../../Hooks/useServices";
import serviceCover from "../../../images/services.png";
import HomeService from "./HomeService/HomeService";

const HomeServices = () => {
  const [services] = useServices();
  const fourServices = services.slice(0, 4);
  return (
    <div>
      <Container>
        <Row className="g-5">
          <Col md={5}>
            <img src={serviceCover} alt="" class="img-fluid" />
          </Col>
          <Col md={7}>
            <Row>
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
