import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { createFeedBack } from "../actions/supportActions";
import { useDispatch, useSelector } from "react-redux";

import { useMediaQuery } from "react-responsive";
import { createProduct } from "../actions/productActions";

import { GrInstagram } from "react-icons/gr";
import { AiFillFacebook } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";
import { AiFillPhone } from "react-icons/ai";

import { useHistory } from "react-router-dom";

import "../css/aboutus.css";
import { Link } from "@material-ui/core";

function AboutUs() {
  const history = useHistory();
  //
  const [sendbutton, setSendButtonn] = useState(false);
  const [issatbutton, setIsSatButtonn] = useState("dark");
  const [notsatbutton, setNotSatButtonn] = useState("dark");
  const [issatisfied, setIsSatisfied] = useState("");
  const [comment, setComment] = useState("");
  const [msg, setMsg] = useState("");
  const [feedback, setFeedback] = useState(false);
  const [contact, setContact] = useState(false);

  const dispatch = useDispatch();

  const createfeedback = useSelector((state) => state.feedback);
  const { loading, error, success } = createfeedback;

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  var bor = "transparent";

  var feedbackPadding = "100px";

  useEffect(() => {
    if (isMobile) {
      bor = "1px solid #333";
      feedbackPadding = "5px";
    }
  }, [isMobile]);

  const submitHandler = (e) => {
    setMsg("");
    if (comment.length > 0 && issatisfied.toString().length > 0) {
      setSendButtonn(true);
      dispatch(createFeedBack(issatisfied, comment));
    } else {
      setMsg("plese write feedback ");
    }
  };

  return (
    <div
      className="footer"
      style={{ backgroundColor: "black", border: "transparent" }}
    >
      <Container>
        <Row className="justify-content-center  ">
          <p
            className="bangers py-3"
            style={{ color: "white", fontSize: "30px" }}
          >
            Svadya.in
          </p>
        </Row>
        <Row>
          {/* About us */}

          <Col
            className="my-1 py-1 "
            style={{ borderBottom: "transparent" }}
            md={2}
          >
            <h6
              className=" aboutus__link coustard"
              onClick={(e) => history.push("/about-us")}
            >
              About us
            </h6>
          </Col>

          {/* Contact us  about-us*/}

          <Col className=" py-1 my-1 " style={{ borderBottom: bor }} md={2}>
            <h6
              onClick={(e) =>
                contact === false ? setContact(true) : setContact(false)
              }
              className="aboutus__link coustard"
            >
              Contact us
            </h6>
          </Col>

          {/* Daily Post */}

          <Col className=" py-1 my-1 " style={{ borderBottom: bor }} md={2}>
            <h6
              className=" aboutus__link coustard"
              onClick={(e) => history.push("/coming-soon")}
            >
              Coming Soon
            </h6>
          </Col>

          {/* Feed Back */}

          <Col className=" py-1 my-1 " style={{ borderBottom: bor }} md={2}>
            <h6
              onClick={(e) =>
                feedback === false ? setFeedback(true) : setFeedback(false)
              }
              className=" aboutus__link coustard"
            >
              FeedBack
            </h6>
          </Col>

          <Col className=" py-1 my-1 " style={{ borderBottom: bor }} md={2}>
            <h6
              onClick={(e) => history.push("/brands/svadya-honey")}
              className=" aboutus__link coustard"
            >
              Svadya honey
            </h6>
          </Col>

          <Col className=" py-1 my-1 " style={{ borderBottom: bor }} md={2}>
            <h6
              onClick={(e) => history.push("/brands/svadya-ghee")}
              className=" aboutus__link coustard"
            >
              Svadya Cow Ghee
            </h6>
          </Col>
        </Row>

        {contact && (
          <>
            <Col className="py-4" style={{ color: "white" }}>
              <AiFillPhone className="mx-2" style={{ fontSize: "20px" }} />{" "}
              +919664467232
            </Col>
            <Col className="py-4" style={{ color: "white" }}>
              <span className="mx-2" style={{ fontSize: "20px" }} >Address : </span>
              C-204, TITANIUM SQUARE, NR THALTEJ CROSS ROAD, S.G. HIGHWAY,
              THALTEJ, Ahmedabad Municipal Corporation, Gujarat-380054
            </Col>
          </>
        )}

        {feedback && (
          <Row>
            {/* your Feedback  */}

            <Col
              style={{ paddingBottom: feedbackPadding, borderBottom: bor }}
              className=" my-1 py-1"
            >
              <Form className="">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="font-weight-bold text-muted my-1 py-1">
                    {" "}
                    We'd love your Feedback!
                  </Form.Label>

                  <div className="ist-group-item d-flex justify-content-between align-items-center py-3">
                    <span>
                      <Button
                        variant={issatbutton}
                        disabled={sendbutton}
                        onClick={(e) => [
                          setIsSatButtonn("success"),
                          setNotSatButtonn("dark"),
                          setIsSatisfied(true),
                        ]}
                      >
                        Good' Satisfied
                      </Button>{" "}
                    </span>
                    <span>
                      <Button
                        variant={notsatbutton}
                        disabled={sendbutton}
                        onClick={(e) => [
                          setIsSatButtonn("dark"),
                          setNotSatButtonn("success"),
                          setIsSatisfied(false),
                        ]}
                      >
                        Bad' UnSatisfied
                      </Button>{" "}
                    </span>
                  </div>

                  {issatisfied === true && (
                    <p className="text-white font-weight-light">
                      We love that. Help us to improve more
                    </p>
                  )}
                  {issatisfied === false && (
                    <p className="text-white font-weight-light">
                      What we do Wrong ? Your FeedBack matter.
                    </p>
                  )}

                  <Form.Control
                    style={{ border: "transparent" }}
                    disabled={sendbutton}
                    onChange={(e) => setComment(e.target.value)}
                    as="textarea"
                    rows={2}
                  />
                </Form.Group>
                {success && (
                  <h6 className="text-success font-weight-light">
                    Thank U For FeedBack
                  </h6>
                )}
                <h6 className="text-danger font-weight-light">{msg}</h6>
              </Form>
              <span style={{ paddingBottom: "10px" }}>
                <button
                  onClick={submitHandler}
                  disabled={sendbutton}
                  type="submit"
                  className="btn btn-outline-success"
                >
                  send
                </button>
              </span>
            </Col>
          </Row>
        )}

        <p style={{ paddingTop: "20px" }}>
          <span className="social_media_icon">
          <a href="https://www.instagram.com/svadya_in/">  <GrInstagram  style={{ color: "DF576D", fontSize: "25px" }} />
          </a>
          </span>
          <span className="social_media_icon">
          <a href="https://www.facebook.com/profile.php?id=100072701801960">  <AiFillFacebook style={{ color: "0F8CF1", fontSize: "28px" }} />
          </a> 
          </span>
         
        </p>

        <p>
          <Col
            className="aboutus__link my-1"
            onClick={(e) => history.push("/privacy-policy")}
          >
            Privacy Policy
          </Col>{" "}
          <Col
            className="aboutus__link my-1"
            onClick={(e) => history.push("/term-of-use")}
          >
            Term of use
          </Col>
          <Col
            className="aboutus__link my-1"
            onClick={(e) => history.push("/refund-policy")}
          >
            Refund Policy
          </Col>
          <Col
            className="aboutus__link my-1"
            onClick={(e) => history.push("/shipping-policy")}
          >
            Shipping Policy
          </Col>
        </p>
        <p className="lora " style={{ paddingBottom: "10px" }}>
          {" "}
          © 2021 www.svadya.in All rights reserved.{" "}
        </p>
      </Container>
    </div>
  );
}

export default AboutUs;
