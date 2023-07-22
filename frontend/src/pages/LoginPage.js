import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { Container, Button, Row, Col, Form, Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import GoogleLogin from "react-google-login";
import axios from "axios";

import { BiShow, BiHide } from "react-icons/bi";

import { HiHand } from "react-icons/hi";

import m1 from "../static/svg/man1.svg";
import i21 from "../static/svg/bee1.svg";
import i22 from "../static/svg/jar1.svg";

import "../css/login_reg.css";

function LoginPage({ history, location }) {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [hide, setHide] = useState("Show");
  const [txt, setTxt] = useState("password");

  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo.IsuserLogin) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, pwd));
  };

  const pwdHideHandler = (e) => {
    if (hide == "Show") {
      setHide("Hide");
      setTxt("text");
    } else {
      setHide("Show");
      setTxt("password");
    }
  };

 

  {/* Test for now 
  
  
  const googleLogin = async (accesstoken) => {
    let res = await axios.post(
      "http://localhost:8000/api/users/auth/google/",
      {
        access_token: accesstoken,
      }
    );
    console.log(res);
    return await res.status;
  
  }
 
  const googleResponse = async (response) => {
    console.log(response.tokenId)
    console.log(response.accessToken)

    let gResponse  = await googleLogin(response.tokenId)
    console.log(response);


  }
  
  */}
  


  return (
    <Container>
      <Container>
        <Row
          className="justify-content-md-center   my-3  "
          style={{
            border: "transparent",
            backgroundColor: "rgba(255,255,255,0.6)",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <Col className="login_reg_container">
            <Row className="justify-content-md-center">
              <Col className="px-0" md={6} xs={6}>
                <Button className="btn-block rounded-0 " variant="dark">
                  Login
                </Button>
              </Col>
              <Col
                className="px-0"
                md={6}
                xs={6}
                style={{ borderLeft: "1px solid grey" }}
              >
                <Link
                  to={redirect ? `/register?redirect=${redirect}` : "/register"}
                >
                  <Button className="btn-block rounded-0" variant="primary">
                    Register
                  </Button>{" "}
                </Link>
              </Col>
            </Row>
            <Row>
              <Col
                md={6}
                className="mx-0 px-0 login__page"
                style={{ borderRight: "1px solid rgba(0,0,0,0.2)" }}
              >
                <p className="py-1 my-1" style={{ textAlign: "center" }}>
                  <img src={m1} style={{ width: "80px", height: "70px" }} />
                  
                </p>
                
                <Row className="justify-content-center py-0 my-0">
                  <h3 className="bangers">
                    {" "}
                    <span>
                      <HiHand style={{ color: "#ffe0bd", fontSize: "23px" }} />
                    </span>{" "}
                    Welcome back !
                  </h3>
                </Row>
                <Row className="justify-content-center py-0 my-2">
                  <h6 className="poppins">
                    BeeeGreen A vision with Oportunity
                  </h6>
                </Row>
                <div className="my-3">
                  <p className="" style={{ textAlign: "center" }}>
                    <img src={i21} className="crop__img" />
                    <img src={i21} className="crop__img" />
                    <img src={i21} className="crop__img" />
                    <img src={i21} className="crop__img" />
                    <img src={i21} className="crop__img" />
                    <img src={i21} className="crop__img" />
                    <img src={i21} className="crop__img" />
                    <img src={i21} className="crop__img" />
                  </p>

                  {!isMobile && (
                    <>
                      <p className="" style={{ textAlign: "center" }}>
                        <img src={i22} className="crop__img" />
                        <img src={i22} className="crop__img" />
                        <img src={i22} className="crop__img" />
                        <img src={i22} className="crop__img" />
                        <img src={i22} className="crop__img" />
                        <img src={i22} className="crop__img" />
                        <img src={i22} className="crop__img" />
                        <img src={i22} className="crop__img" />
                      </p>

                      <p className="" style={{ textAlign: "center" }}>
                        <img src={i21} className="crop__img" />
                        <img src={i21} className="crop__img" />
                        <img src={i21} className="crop__img" />
                        <img src={i21} className="crop__img" />
                        <img src={i21} className="crop__img" />
                        <img src={i21} className="crop__img" />
                        <img src={i21} className="crop__img" />
                        <img src={i21} className="crop__img" />
                      </p>
                    </>
                  )}
                </div>
              </Col>
              <Col md={6}>
                <Form className="mx-3 my-3" onSubmit={submitHandler}>
                  {userInfo.error && (
                    <Row className="justify-content-center">
                      <strong className="text-danger">
                        Email & Password Not Match
                      </strong>
                    </Row>
                  )}
                  <Form.Group controlId="Email" className="py-3 my-1">
                    <Form.Label className="text__lable ">
                      Email address
                    </Form.Label>
                    <Form.Control
                      className="text__field"
                      required
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="Password">
                    <Form.Label className="text__lable">Password</Form.Label>
                    <div className="pwd_field">
                      <Form.Control
                        className="text__field"
                        required
                        type={txt}
                        value={pwd}
                        placeholder="Password"
                        onChange={(e) => setPwd(e.target.value)}
                      />
                      <span
                        onClick={(e) => pwdHideHandler()}
                        className="show-hide"
                        style={{ cursor: "pointer" }}
                      >
                        {hide === "Show" ? <BiHide /> : <BiShow />}
                      </span>
                    </div>
                  </Form.Group>
                  <Row className="justify-content-center">

                      <Button style={{width:'60%',borderRadius:'0px'}} className="my-4" variant="primary" type="submit">
                        Log In
                      </Button>
                      

                      </Row>


              {/*<Row className="justify-content-center">
                      <GoogleLogin
                        style={{width:'200px'}}
                        clientId="497136375297-ssuuhbj2oecgs9pejl8q1j0qnm6g8pi4.apps.googleusercontent.com"
                        buttonText="LOGIN WITH GOOGLE"
                        onSuccess={googleResponse}
                        onFailure={googleResponse}
                      />
                      </Row> */}
                      
                  <p
                    className="windsong py-3 my-2"
                    style={{
                      textAlign: "right",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    Badal Patel ...
                  </p>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default LoginPage;
