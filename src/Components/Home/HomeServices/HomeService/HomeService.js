import React from "react";
import { Col } from "react-bootstrap";

const HomeService = ({ service }) => {
  console.log(service);
  const { id, img, price, title, description } = service;
  return (
    <div>
      <Col md={6}>
        <img src={img} alt="" className="img-fluid" />
        <h3>{title}</h3>
        <p>{description}</p>
      </Col>
    </div>
  );
};

export default HomeService;
