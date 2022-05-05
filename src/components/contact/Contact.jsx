import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./contact.css";

import Form from "../form/Form";

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Get In Touch</h2>
          </Col>

          <Col lg="6" md="6">
            <div className="contact__info-container d-flex align-items-center gap-5">
              <div className="single__info-box w-50">
                <h6>Address</h6>
                <p>Republic of Korea, Asian Country</p>
              </div>

              <div className="single__info-box w-50">
                <h6>Phone</h6>
                <p>010-1234-5678</p>
              </div>
            </div>

            <div className="contact__info-container d-flex align-items-center gap-5">
              <div className="single__info-box w-50">
                <h6>Email</h6>
                <p>jason1234@gmail.com</p>
              </div>

              <div className="single__info-box w-50">
                <h6>Location</h6>
                <p>
                  393, Pangyo-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Republic
                  of Korea
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
