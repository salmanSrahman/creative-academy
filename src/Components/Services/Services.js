import React from "react";
import { Container, Row } from "react-bootstrap";
import useServices from "../../Hooks/useServices";
import Service from "./Service/Service";
import "./Services.css";

const Services = () => {
  const [services] = useServices([]);
  return (
    <div className="allServices-part">
      <Container>
        <div className="title d-flex justify-content-center">
          <h1 className="text-color text-center pb-5 text-uppercase">
            Our All Services
          </h1>
        </div>
        <Row className="g-5">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
