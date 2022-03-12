import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
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
        {services.length ? (
          <Row className="g-5">
            {services.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </Row>
        ) : (
          <div className="d-flex mt-5 pt-5 justify-content-center">
            <Spinner animation="border" variant="danger" />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Services;
