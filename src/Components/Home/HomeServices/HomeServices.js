import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useServices from "../../../Hooks/useServices";
// import serviceCover from "../../../images/services.png";
import HomeService from "./HomeService/HomeService";
import "./HomeServices.css";

const HomeServices = () => {
  const [services] = useServices();
  const fourServices = services.slice(0, 4);
  return (
    <div className="homeServices-part">
      <Container>
        <Row className="g-2">
          <Col
            md={5}
            className="d-flex justify-content-center align-items-center"
          >
            {/* <img src={serviceCover} alt="" class="img-fluid" /> */}
            <video width="750" height="500" autoplay muted loop>
              <source
                src="/https://rabbil.com/video/banner-video.mp4"
                type="video/mp4"
              />
            </video>
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
