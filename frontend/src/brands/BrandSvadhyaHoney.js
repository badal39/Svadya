import React, { useState, useEffect } from "react";
import "./css/BrandSvadhyaHoney.css";

import { Row, Col ,Container} from "react-bootstrap";
import ReactPlayer from "react-player/lazy";
import h1 from "../static/vidoes/vidoe1.mp4";
import hb1 from "../static/images/hb1.jpeg";
import hb2 from "../static/images/hb2.jpeg";
import hb3 from "../static/images/hb3.jpeg";
import hb4 from "../static/images/hb4.jpeg";
import hb5 from "../static/images/hb5.jpeg";
import hb6 from "../static/images/hb6.jpeg";
import hb7 from "../static/images/hb7.jpeg";



import { GrPlay, GrPause } from "react-icons/gr";
import { useMediaQuery } from "react-responsive";

function BrandSvadhyaHoney() {
  const [play, setPlay] = useState(1);
  const [pause, setPause] = useState(0);
  const [show, setShow] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  //const h1 = "https://svadya-bucket.s3.ap-south-1.amazonaws.com/frontend_static/vidoe1.mp4";

  const hoverHandler = () => {
    setShow(true);
  };
  const nothoverHandler = () => {
    setShow(false);
  };

  return (
    <div className="brand__background">
    <p className="brand__title yanone-kaffeesatz">SVADHYA HONEY</p>
    <Container>
      <Row className="mx-0 px-0">
        <Col>
          <div
            className="card border-success mb-3"
          >
            <div className="card-header sigmar-One">bee colonies 1</div>
            <div
              className="card-body coustard"
            >
              <img className="px-0 mx-0" src={hb1} style={{width:'100%',height:'100%'}} />
             
            </div>
          </div>
        </Col>
        <Col md={3}></Col>
   
      </Row>
      <Row className="mx-0 px-0">
        <Col md={2}></Col>
        <Col>
        <div
            className="card border-success mb-3"
          >
            <div className="card-header sigmar-One">bee colonies 2</div>
            <div
              className="card-body coustard"
            >
              <img className="px-0 mx-0" src={hb3} style={{width:'100%',height:'100%'}} />
             
            </div>
          </div>
        </Col>
        <Col md={2}></Col>
        <Col>
        <div
            className="card border-success mb-3"
          >
            <div className="card-header sigmar-One">bee colonies 3</div>
            <div
              className="card-body coustard"
            >
              <img className="px-0 mx-0" src={hb4} style={{width:'100%',height:'100%'}} />
             
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mx-0 px-0">
        <Col>
        <div
            className="card border-success mb-3"
          >
            <div className="card-header sigmar-One">bee colonies 4</div>
            <div
              className="card-body coustard"
            >
              <img className="px-0 mx-0" src={hb5} style={{width:'100%',height:'100%'}} />
             
            </div>
          </div>
        </Col>
        <Col md={1}></Col>
        <Col>
        <div
            className="card border-success mb-3"
          >
            <div className="card-header sigmar-One">bee colonies 5</div>
            <div
              className="card-body coustard"
            >
              <img className="px-0 mx-0" src={hb6} style={{width:'100%',height:'100%'}} />
             
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mx-0 px-0">
        <Col md={4}></Col>
        <Col>
        <div
            className="card border-success mb-3"
          >
            <div className="card-header sigmar-One">bee colonies 6</div>
            <div
              className="card-body coustard"
            >
              <img className="px-0 mx-0" src={hb7} style={{width:'100%',height:'100%'}} />
             
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default BrandSvadhyaHoney;
