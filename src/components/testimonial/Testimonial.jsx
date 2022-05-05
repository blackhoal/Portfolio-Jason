import React from "react";
import "./testimonial.css";

import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5 text-center">
            <h2>What my clients says</h2>
          </Col>

          <Col lg="6" className="m-auto">
            <Slider { ... settings }>
              <div>
                <div className="single__testimonial">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <h6>Martin Cooper</h6>
                  <p className="title">Web Developer</p>
                </div>
              </div>

              <div>
                <div className="single__testimonial">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <h6>Martin Cooper</h6>
                  <p className="title">Web Developer</p>
                </div>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
