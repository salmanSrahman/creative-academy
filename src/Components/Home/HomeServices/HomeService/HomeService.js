import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomeService.css";
const HomeService = ({ service }) => {
  const { id, img, price, title } = service;
  return (
    <Col md={6}>
      <Card>
        <img src={img} alt="" className="img-fluid serviceCard-img" />
        <div className="service-text">
          <h4 className="text-color">{title}</h4>
          <h5>{price} $</h5>
          <div className="d-flex justify-content-between py-2">
            <Button variant="outline-danger" size="sm">
              <Link to={`/homeService/${id}`}> See Details</Link>
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
