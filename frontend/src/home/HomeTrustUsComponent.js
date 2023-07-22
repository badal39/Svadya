import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import v12 from "../static/vidoes/v12.mp4";

import svg10 from "../static/svg/10.svg";
import svg13 from "../static/svg/13.svg";
import svg16 from "../static/svg/16.svg";
import svg17 from "../static/svg/17.svg";

import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import "./css/homeTrustUsComponent.css";

function HomeTrustUsComponent() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const history = useHistory();

  return (
    <Row className="px-0 mx-0 ">
      <Col>
        <Row className="px-0 mx-0 justify-content-center my-3 ">
          <div className="box box1">
            <div className="oddboxinner">
              <h1 className="bangers py-4" style={{ color: "black" }}>
                why trust us ?
              </h1>
            </div>
          </div>
        </Row>

        <Row className="px-0 mx-0 justify-content-center  ">
          <h5 className="slabo justify " style={{color:'black'}}>
          WE HAVE BUILD A SOLID TRUST WITH OUR LOCAL CUSTOMERS AND WE HAVE A
            RECORD OF SATISFYING OUR CUSTOMERS BY OUR NATURAL PRODUCTS .NOW WE
            ARE TRYING TO EXPAND OUR TERRITORY BY SELLING OUR PRODUCT ONLINE .
          </h5>
        </Row>

        {!isMobile && (
          <>
            <p className="py-3 my-3" style={{ textAlign: "right" }}>
              {" "}
              <video
                className="homepage__trust__vidoe "
                src={v12}
                muted
                loop
                autoPlay
              ></video>
            </p>

            <p className="py-3 my-3" style={{ textAlign: "left" }}>
              {" "}
              <video
                className="homepage__trust__vidoe "
                src={v12}
                muted
                loop
                autoPlay
              ></video>
            </p>

            <p className="py-3 my-3" style={{ textAlign: "right" }}>
              {" "}
              <video
                className="homepage__trust__vidoe "
                src={v12}
                muted
                loop
                autoPlay
              ></video>
            </p>
          </>
        )}
      </Col>
      <Col className="my-5" md={6}>
        <Row className="px-0 mx-0 justify-content-center my-2 py-1 ">
          <h3>
            Why Choose us ? <span className="Border-bottom py-2 "> Right </span>
          </h3>
        </Row>

        <Row className="py-3 my-2">
          <Col md={4}>
            <Row className="justify-content-center">
              <img src={svg17} style={{ height: "100px" }} />
            </Row>
            <h3
              className="poppins"
              style={{ color: "#03CEA4", textAlign: "center" }}
            >
             PURE HANDS
            </h3>
            <p
              className="slabo"
              style={{ textAlign: "center", fontWeight: "100" }}
            >
             WE BELIVE IN " WHATEVER YOU DO, DO IT TO MAKE CHANGE "
            </p>
          </Col>
        </Row>
        <Row className="py-3 ">
          <Col md={4}></Col>
          <Col md={4}>
            <Row className="justify-content-center">
              <img src={svg10} style={{ height: "100px" }} />
            </Row>
            <h3
              className="poppins"
              style={{ color: "#03CEA4", textAlign: "center" }}
            >
              POSITIVE THINKING
            </h3>
            <p
              className="slabo"
              style={{ textAlign: "center", fontWeight: "100" }}
            >
              WE INSPIRE OTHER ALSO TO SELL ORGANIC AND NATURAL PRODUCT
            </p>
          </Col>
        </Row>

        <Row className="py-3 ">
          <Col md={4}>
            <Row className="justify-content-center">
              <img src={svg13} style={{ height: "100px" }} />
            </Row>
            <h3
              className="poppins"
              style={{ color: "#03CEA4", textAlign: "center" }}
            >
              CUSTOMERS IS GOD
            </h3>
            <p
              className="slabo"
              style={{ textAlign: "center", fontWeight: "100" }}
            >
              OUR CUSTOMERS SATISFACTION IS OUR FIRST PRIOTITY{" "}
            </p>
          </Col>
        </Row>

        <Row className="py-3 ">
          <Col md={4}></Col>
          <Col md={4}>
            <Row className="justify-content-center">
              <img src={svg16} style={{ height: "100px" }} />
            </Row>
            <h3
              className="poppins"
              style={{ color: "#03CEA4", textAlign: "center" }}
            >
            LIVE SELLING            </h3>
            <p
              className="slabo"
              style={{ textAlign: "center", fontWeight: "100" }}
            >
                 BUYING LIVE PRODUCT IS GREAT IDEA , JUST TRY IT             </p>
          </Col>
        </Row>

        <Row className="justify-content-center px-5 my-3">
          <p
            className="py-5 sigmar-One"
            style={{ textAlign: "center", fontSize: "30px" }}
          >
            <button
              onClick={(e) => history.push("/products/")}
              className="button-30 bangers "
              style={{ width: "200px", padding: "28px" }}
            >
              <span
                style={{
                  borderBottom: "1px solid rgb(3, 206, 164)",
                  padding: "8px",
                }}
              >
                Shop Now
              </span>
            </button>
          </p>
        </Row>
      </Col>
    </Row>
  );
}

export default HomeTrustUsComponent;
