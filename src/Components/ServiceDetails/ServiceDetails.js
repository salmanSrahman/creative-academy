import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import useServices from "../../Hooks/useServices";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const [services] = useServices([]);
  const { serviceId } = useParams();

  const selectedService = services.find(
    (service) => service.id === Number(serviceId)
  );

  return (
    <div className="service-details">
      <Container>
        <Row>
          <Col md={6} className="mx-auto">
            <Card>
              <img
                src={selectedService?.img}
                alt=""
                className="img-fluid serviceCard-img"
              />
              <div className="service-text">
                <h4 className="text-color">{selectedService?.title}</h4>
                <p>{selectedService?.description}</p>
                <h5>{selectedService?.price} $</h5>
                <div className="d-flex justify-content-between py-2">
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => {
                      navigate("/services");
                    }}
                  >
                    Go Back
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => {
                      navigate("/enroll");
                    }}
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceDetails;
