import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./HomeService.css";
const HomeService = ({ service }) => {
  console.log(service);
  const { img, price, title } = service;
  return (
    <Col md={6}>
      <Card>
        <img src={img} alt="" className="img-fluid serviceCard-img" />
        <div className="service-text">
          <h4 className="text-color">{title}</h4>
          <h5>{price} $</h5>
          <div className="d-flex justify-content-between py-2">
            <Button variant="outline-danger" size="sm">
              See Details
            </Button>
            <Button variant="outline-primary" size="sm">
              Enroll Now
            </Button>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default HomeService;
