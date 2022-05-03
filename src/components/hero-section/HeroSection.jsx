import React, { useRef, useEffect } from "react";
import "./hero-section.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/hero-img.png";
import { init } from 'ityped';

const HeroSection = () => {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            showCursor: true,
            strings:[
                '안진성',
                'Ahn Jin Sung',
                'Andrew Jason',
            ],
        });
    }, []);

  return (
    <section className="hero__section" id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <p className="mb-3">Welcome to My World</p>
              <h2 className="hero__title mb-4">
                개발자 <span ref={textRef}></span> 입니다.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum, aut nam tenetur dolore accusamus dolorem blanditiis
                quia est tempora animi optio eos sit ut consectetur sequi a
                reprehenderit voluptas accusantium?
              </p>

              <div className="mt-5 hero__btns d-flex align-items-center gap-4">
                <button className="btn hire__btn">
                  <a href="#!">Hire me</a>
                </button>
                <button className="btn">Contact</button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
