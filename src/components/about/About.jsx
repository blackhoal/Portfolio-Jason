import React, { useState } from "react";
import "./about.css";
import aboutImg from "../../assets/images/hero-img.png";
import Education from "./Education";
import Skills from "./Skills";
import Award from "./Award";

import { Container, Row, Col } from "reactstrap";

const About = () => {
  const [aboutFilter, setAboutFilter] = useState("ABOUT");

  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>About Me</h2>
          </Col>

          <Col lg="4" md="3">
            <div className="about__btns">
              <button
                className={`about__btn ${
                  aboutFilter === 'ABOUT' ? 'about__btn-active' : ''
                }`}
                onClick={() => setAboutFilter("ABOUT")}
              >
                About Me
              </button>
              <button
                className={`about__btn ${
                  aboutFilter === 'EDUCATION' ? 'about__btn-active' : ''
                }`}
                onClick={() => setAboutFilter("EDUCATION")}
              >
                Education
              </button>
              <button
                className={`about__btn ${
                  aboutFilter === 'SKILLS' ? 'about__btn-active' : ''
                }`}
                onClick={() => setAboutFilter("SKILLS")}
              >
                Skills
              </button>
              <button
                className={`about__btn ${
                  aboutFilter === 'AWARD' ? 'about__btn-active' : ''
                }`}
                onClick={() => setAboutFilter("AWARD")}
              >
                Award
              </button>
            </div>
          </Col>

          <Col lg="8" md="9">
            {aboutFilter === "ABOUT" && (
              <div className="about__content__wrapper d-flex gap-5">
                <div className="about__img w-25">
                  <img src={aboutImg} alt="" className="w-100" />
                </div>

                <div className="about__content w-75">
                  <h2>I'm Ahn Jin Sung</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Labore saepe, quaerat voluptatem fuga amet velit delectus
                    non sit hic omnis quos excepturi sed minus id quidem
                    molestias modi, eius deleniti?
                  </p>

                  <div className="social__links">
                    <h6 className="mb-3">Contact With Me</h6>
                    <span>
                      <a href="#">
                        <i className="ri-facebook-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="ri-youtube-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="ri-instagram-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="ri-github-fill"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="ri-linkedin-box-line"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {aboutFilter === "EDUCATION" && <Education />}

            {aboutFilter === "SKILLS" && <Skills />}

            {aboutFilter === "AWARD" && <Award />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
