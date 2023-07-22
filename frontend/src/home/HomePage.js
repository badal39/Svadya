// image import

import i22 from "../static/svg/jar1.svg";
import offer2 from "../static/offer/o2.png";


import combo1 from "../static/images/ghee1+honey.jpeg";
import combo3 from "../static/images/honey1+ghee1.jpeg";
import combo2 from "../static/images/honey4.jpeg";
import cow from "../static/images/cow1.jpeg";

import HomeSvgProductComponent from "./HomeSvgProductComponent";
import HomeTrustUsComponent from "./HomeTrustUsComponent";

// icons

import { FaGreaterThan } from "react-icons/fa";

import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Loading from "../components/Loading";

import { useDispatch, useSelector } from "react-redux";

import AboutUs from "../components/AboutUs";

import ProductsCard from "../products/ProductsCard";

import { useMediaQuery } from "react-responsive";

import { Row, Col, Card, Image, Container, Carousel } from "react-bootstrap";

import "./css/homepage.css";

function Homepage({ history }) {
  const upto = 0;
  const dispatch = useDispatch();

  var [date, setDate] = useState(new Date());
  var [temp, settemp] = useState(" ");

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const Honey_des =
    "Buy something important for your health pure Honey  directly from beee-keepers ";
  const Ghee_des =
    "Buy something important for your health pure Ghee  directly from cow-keepers";

  useEffect(() => {}, [dispatch]);

  const cropHandler = (e) => {
    return (
      <p className="" style={{ textAlign: "center" }}>
        <span className="px-4">
          {" "}
          <img src={i22} className="crop__img" />
        </span>
        <span className="px-4">
          {" "}
          <img src={i22} className="crop__img" />
        </span>
        <span className="px-4">
          {" "}
          <img src={i22} className="crop__img" />
        </span>{" "}
        <span className="px-4">
          {" "}
          <img src={i22} className="crop__img" />
        </span>
        <span className="px-4">
          {" "}
          <img src={i22} className="crop__img" />
        </span>
        <span className="px-4">
          {" "}
          <img src={i22} className="crop__img" />
        </span>
        <span className="px-4">
          {" "}
          <img src={i22} className="crop__img" />
        </span>{" "}
        <span className="px-4">
          {" "}
          <img src={i22} className="crop__img" />
        </span>
      </p>
    );
  };

  return (
    <div>
      {/* background a */}

      <div className="homepage__ a">
        <Row className="px-0 mx-0 py-3 my-0 ">
          <Col className="py-2 my-0" md={6}>
            <Row
              className="px-0 mx-0   justify-content-center "
              style={{ marginTop: "20px" }}
            >
              <h1
                className="roboto"
                style={{
                  color: "white",
                  textAlign: "center",
                  maxWidth: "800px",
                  fontWeight: "500",
                }}
              >
                FROM FARM TO YOUR HEART
              </h1>
            </Row>

            <Row
              className="px-0 mx-0   justify-content-center "
              style={{ marginTop: "10px" }}
            >
              <h4
                className="coustard"
                style={{
                  color: "white",
                  textAlign: "center",
                  maxWidth: "500px",
                  fontSize: "1.3em",
                  fontWeight: "500",
                }}
              >
                Svadya Is Organization Which Provide The Natural & Organic
                Product All Over India
              </h4>
            </Row>

            <Row
              className="px-0 mx-0   justify-content-center "
              style={{ marginTop: "30px" }}
            >
              <Link to={`/products/`} style={{ color: "black" }}>
                <button className="button-82-pushable" role="button">
                  <span className="button-82-shadow"></span>
                  <span className="button-82-edge"></span>
                  <span className="button-82-front text">EXPLORE NOW</span>
                </button>
              </Link>
            </Row>
            <HomeSvgProductComponent />
          </Col>
        
        
           {!isMobile && (
            <Col className="py-2 my-2" md={6}>
                              <img  src={offer2} style={{width:'95%'}} />

            </Col>
          )}
          
          

          
        </Row>
        {/*   homepage a products svg */}
      </div>

      {/* background b */}
      <div className="homepage__ b">
        <HomeTrustUsComponent />
      </div>

      {/* About Ghee  */}

      <div className="homepage__ ghee_background">
        <Row className="px-0 mx-0 ">
          <Col className={isMobile ? "px-0 mx-0 " : ""} md={6}>
            <img className="py-4" style={{ width: "100%" }} src={cow} />
          </Col>
          <Col className={isMobile ? "px-0 mx-0 " : "px-0 mx-0 py-5 my-5"}>
            <h2
              className="lora "
              style={{ textAlign: "center", color: "black" }}
            >
              {" "}
              <span>Why </span>
              <span>Cow </span>
              <span>Ghee </span>
              <span>is </span>
              <span>Important </span>
              <span
                style={{
                  borderBottom: "4px solid rgb(254,205,84)",
                  padding: "5px",
                }}
              >
                ?
              </span>
            </h2>

            <p
              className=" slabo py-3 "
              style={{
                textAlign: isMobile ? "left" : "center",
                fontSize: isMobile ? "23px" : "28px",
                color: "black",
              }}
            >
              Use of organic ghee in the food items is reflected as a symbol of
              richness and health benefit even today. It is a powerhouse of
              vitamins, acids, and energy which promotes good health. India is
              one of the largest producer as well as consumer of desi ghee. It
              not only enhances the taste of the food but also adds on to the
              fitness and health of the individual. So, you can buy the best
              grass-fed ghee at our online store to take the atmost benefit of
              eating ghee.
            </p>

            <p
              className="py-3 sigmar-One"
              style={{ textAlign: "center", color: "black" }}
            >
              So What are you Waiting for ?
            </p>
            <p
              className="py-0 sigmar-One"
              style={{ textAlign: "center", fontSize: "30px" }}
            >
              <button
                onClick={(e) => history.push("/products?redirect=ghee")}
                className="button-30 bangers "
                style={{ width: "200px" }}
              >
                <span
                  style={{
                    borderBottom: "2px solid rgb(254,205,84)",
                    padding: "7px",
                  }}
                >
                  {" "}
                  Buy Now
                </span>
              </button>
            </p>
          </Col>
        </Row>
      </div>

      {/* Combos  */}

      <div className="py-3 my-3">
        <Row className="px-0 mx-0 justify-content-center ">
          <p
            className="px-2 mx-5 poppins"
            style={{
              textAlign: "center",
              fontSize: "40px",
              fontWeight: "300",
            }}
          >
            <span style={{ borderBottom: "2px solid #2ab7ca", padding: "0px" }}>
              COMBOS
            </span>
          </p>
        </Row>
        <Row className="px-0 mx-0 my-2 ">
          <Col className="my-2" md={4}>
            <ProductsCard
              image={combo1}
              des="Cow Ghee - 1 L + Ajwain Honey - 500 G "
              name="Ghee Honey Combo"
              id={23}
            />
          </Col>
          <Col className="my-2" md={4}>
            <ProductsCard
              image={combo2}
              des="2 Ajwain Honey - 500 G + 2 Multi Honey - 500 G "
              name="honey combo"
              id={21}
            />
          </Col>
          <Col className="my-2" md={4}>
            <ProductsCard
              image={combo3}
              des="Cow Ghee - 500 ml + Multi Honey - 1 KG "
              name="Honey Ghee Combo"
              id={25}
            />
          </Col>
        </Row>

        <p
          className="py-3 poppins"
          style={{ textAlign: "center", fontWeight: "300", fontSize: "30px" }}
        >
          View all price saving deal
        </p>
        <p
          className="py-0 sigmar-One"
          style={{ textAlign: "center", fontSize: "30px" }}
        >
          <button
            onClick={(e) => history.push("/products?redirect=combo")}
            className="button-30 bangers "
            style={{ width: "200px" }}
          >
            <span style={{ borderBottom: "1px solid #2ab7ca", padding: "7px" }}>
              View Now
            </span>
          </button>
        </p>
      </div>

      {/* about us */}

      <AboutUs />
    </div>
  );
}

export default Homepage;
