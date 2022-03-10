import React from "react";
import "./BannerSlider.css";
import slider1 from "../../../images/slider1.png";

import { Button, Carousel, Col, Container, Row } from "react-bootstrap";

const BannerSlider = () => {
  return (
    <div>
      <Carousel bg="light">
        <Carousel.Item>
          <Container>
            <Row className="g-5">
              <Col
                md={7}
                className=" d-flex justify-content-start align-items-center"
              >
                <div className="banner-text">
                  <h1 className="">
                    Development <span className="d-block">is our Goal</span>{" "}
                    <span className="d-block">Ever</span>
                  </h1>
                  <p className="">
                    We are a boutique digital transformation consultancy and
                    software development company.
                  </p>
                  <Button variant="danger">Start Free Trial</Button>
                </div>
              </Col>
              <Col md={5}>
                <img
                  className="d-block w-100 img-fluid"
                  src={slider1}
                  alt="First slide"
                />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BannerSlider;
