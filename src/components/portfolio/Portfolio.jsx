import React from "react";
import "./portfolio.css";
import img01 from "../../assets/images/portfolio-01.png";
import img02 from "../../assets/images/portfolio-02.png";
import img03 from "../../assets/images/portfolio-03.png";

import { Container, Row, Col } from "reactstrap";

const portfolioData = [
  {
    imgUrl: img01,
    title: "React Landing Page",
    url: "#",
  },
  {
    imgUrl: img02,
    title: "React Landing Page",
    url: "#",
  },
  {
    imgUrl: img03,
    title: "React Landing Page",
    url: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="12" className="portfolio__top mb-5">
            <h6>Explore my work and give a feedback</h6>
            <h2>Portfolio</h2>
          </Col>

          {portfolioData.map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index}>
              <div className="portfolio__card">
                <div className="portfolio__img">
                  <img src={item.imgUrl} alt="" className="w-100" />
                </div>

                <div className="portfolio__content">
                  <h5>{item.title}</h5>
                  <a href={item.url}>View Live Demo</a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
