import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const { id, img, price, title } = service;
  return (
    <Col md={4}>
      <Card>
        <img src={img} alt="" className="img-fluid serviceCard-img" />
        <div className="service-text">
          <h4 className="text-color">{title}</h4>
          <h5>{price} $</h5>
          <div className="d-flex justify-content-between py-2">
            <Button variant="outline-danger" size="sm">
              <Link to={`/homeService/${id}`} className="service-link">
                {" "}
                See Details
              </Link>
            </Button>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => {
                navigate("/home");
              }}
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default Service;
