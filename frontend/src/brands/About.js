import React, { useState, useEffect } from "react";

import { Row, Col, Container } from "react-bootstrap";
import t1 from "../static/images/t1.png";

import { GrPlay, GrPause } from "react-icons/gr";
import { useMediaQuery } from "react-responsive";

function About() {
  return (
    <div className="brand__background">
      <p className="brand__title yanone-kaffeesatz">About US</p>
      <Container>
        <Row className="mx-0 px-0">
          <Col>
            <div
              style={{ backgroundColor: "rgb(120,194,173)" }}
              className="card border-success mb-3"
              style={{ maxWidth: "20rem" }}
            >
              <div className="card-header sigmar-One">IDEA</div>
              <div
                style={{ backgroundColor: "rgb(120,194,173)" }}
                className="card-body coustard"
              >
                <p className="card-text" style={{ color: "white" }}>
                  SVADYA IS IDEA OF CRAZY AND DETERMINE ENGINEER , WHO DECIDED
                  TO PROVIDE THE PUREST PRODUCTS TO EVERYONE
                </p>
              </div>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col>
            <div
              style={{ backgroundColor: "rgb(108,195,213)" }}
              className="card border-success mb-3"
              style={{ maxWidth: "20rem" }}
            >
              <div className="card-header sigmar-One">MY Story</div>
              <div
                style={{ backgroundColor: "rgb(108,195,213)" }}
                className="card-body coustard"
              >
                <p className="card-text" style={{ color: "white" }}>
                  As an engineer , when i was working in city , i face
                  difficulties to find pure ghee. Because in my childhood me and
                  my friends where having best ghee . whereas today's kids are
                  not getting that pure form of ghee . so i decide to make
                  change ....
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mx-0 px-0">
          <Col md={2}></Col>
          <Col>
            <div
              style={{ backgroundColor: "black" }}
              className="card border-success mb-3"
              style={{ maxWidth: "20rem" }}
            >
              <div className="card-header sigmar-One">PURE</div>
              <div
                style={{ backgroundColor: "black" }}
                className="card-body coustard"
              >
                <p className="card-text" style={{ color: "white" }}>
                  NOW, we are providing the purest form of ghee in our state .we
                  have added NEW products also HONEY .
                </p>
              </div>
            </div>
          </Col>
          <Col md={2}></Col>
          <Col>
            <div
              style={{ backgroundColor: "black" }}
              className="card border-success mb-3"
              style={{ maxWidth: "20rem" }}
            >
              <div className="card-header sigmar-One">CUSTOMERS</div>
              <div
                style={{ backgroundColor: "black" }}
                className="card-body coustard"
              >
                <p className="card-text" style={{ color: "white" }}>
                  We have Around 100+ customers mounthly.150 kg HONEY and 100 L
                  of GHEE mounthly and we are willing to expand our territory to
                  all over INDIA.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mx-0 px-0">
          <Col>
            <div
              style={{ backgroundColor: "rgb(242,150,154)" }}
              className="card border-success mb-3"
              style={{ maxWidth: "20rem" }}
            >
              <div className="card-header sigmar-One">OUR MOTTO</div>
              <div
                style={{ backgroundColor: "rgb(242,150,154)" }}
                className="card-body coustard"
              >
                <p className="card-text" style={{ color: "white" }}>
                  " INDIA SHOULD CONSUME ORGANIC AND NATURAL PRODUCTS ONLY ,
                  WHEREAS IT IS PROVIDED BY US OR OTHERS. "
                </p>
              </div>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col>
            <div
              style={{ backgroundColor: "rgb(108,195,213)" }}
              className="card border-success mb-3"
              style={{ maxWidth: "20rem" }}
            >
              <div className="card-header sigmar-One">BEGINNING</div>
              <div
                style={{ backgroundColor: "rgb(108,195,213)" }}
                className="card-body coustard"
              >
                <p className="card-text" style={{ color: "white" }}>
                  when we started SVADYA in the beginning we where having
                  limited customers , but the time pass our customers increases
                  because once if anyone try our product then they never get
                  disappointed , our all customers are 100% happy and satisfied
                  by our product .
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mx-0 px-0">
          <Col md={4}></Col>
          <Col>
            <div
              style={{ backgroundColor: "rgb(120,194,173)" }}
              className="card border-success mb-3"
              style={{ maxWidth: "20rem" }}
            >
              <div className="card-header sigmar-One">TASTE</div>
              <div
                style={{ backgroundColor: "rgb(120,194,173)" }}
                className="card-body coustard"
              >
                <p className="card-text" style={{ color: "white" }}>
                  Because we have best man at work . if you take ghee today and
                  taste it,and after 10 years also if you come and buy our ghee
                  it will taste the exactly the same . WE TAKE CARE OF OUR
                  PRODUCT QUALITY...
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
