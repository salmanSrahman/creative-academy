import React from "react";
import "./Enroll.css";
import enroll from "../../../../../images/enroll.svg";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useServices from "../../../../../Hooks/useServices";

const Enroll = () => {
  const [services] = useServices();
  const { detailsId } = useParams();
  const detailsService = services.find(
    (service) => service.id === Number(detailsId)
  );
  return (
    <div className="pb-5">
      <Container>
        <Row className="g-4">
          <Col md={6}>
            <img src={enroll} alt="" className="img-fluid" />
          </Col>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="enroll">
              <h3 className="text-danger">Congrats !</h3>
              <h4 className="text-secondary">
                You Enrolled In{" "}
                <span className="fw-bold">{detailsService?.title}</span> Course.
              </h4>
              <h5 className="text-secondary">
                <span className="fw-bold">{detailsService?.price}$</span>{" "}
                charged for this course.
              </h5>
              <h5 className="text-secondary">
                Soon we will contact you with your student account details.
              </h5>
              <h5 className="text-secondary">Thanks for being with us.</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Enroll;
