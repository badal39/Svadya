import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, login } from "../actions/userActions";
import { BiShow, BiHide } from "react-icons/bi";
import { HiHand } from "react-icons/hi";

import m1 from "../static/svg/man1.svg";
import i21 from "../static/svg/crop3.svg";
import i22 from "../static/svg/bee1.svg";

import m3 from "../static/svg/man3.svg";

import {
  Container,
  Button,
  Row,
  Col,
  Form,
  Alert,
  Image,
} from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

import "../css/login_reg.css";

function RegisterPage({ history, location }) {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [pwd, setPwd] = useState("");
  const [confirmpwd, setConfirmPwd] = useState("");

  const [hide, setHide] = useState("Show");
  const [txt, setTxt] = useState("password");

  const [msg, setMsg] = useState("");

  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;

  useEffect(() => {
    if (userInfo.IsuserLogin) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    userInfo.error = "";
    setMsg("");
    e.preventDefault();
    if (pwd != confirmpwd) {
      setMsg("Password Not Match");
    } else {
      dispatch(register(name, email, pwd));
    }
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
                <Button
                  className="btn-block rounded-0 "
                  variant="primary"
                  onClick={(e) => history.push("/login")}
                >
                  Login
                </Button>
              </Col>
              <Col
                className="px-0"
                md={6}
                xs={6}
                style={{ borderLeft: "1px solid grey" }}
              >
                <Button className="btn-block rounded-0" variant="dark">
                  Register
                </Button>
              </Col>
            </Row>

            <Row>
              <Col
                md={6}
                className="mx-0 px-0 login__page"
                style={{ borderRight: "1px solid rgba(0,0,0,0.2)" }}
              >
                <p className="py-1 my-1" style={{ textAlign: "center" }}>
                  <img src={m3} style={{ width: "80px", height: "70px" }} />
                </p>
                <Row className="justify-content-center py-0 my-0">
                  <h3 className="bangers">
                    {" "}
                    <span>
                      <HiHand style={{ color: "#ffe0bd", fontSize: "23px" }} />
                    </span>{" "}
                    Welcome !
                  </h3>
                </Row>
                <Row className="justify-content-center py-0 my-2">
                  <h6 className="poppins">
                    BeeeGreen A vision with Oportunity
                  </h6>
                </Row>

                <div className="my-3">
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

                  {!isMobile && (
                    <>
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

              <Col md={6} className="mx-0 px-0">
                <Form className="mx-3 my-3" onSubmit={submitHandler}>
                  <Row className="justify-content-center  py-1">
                    <strong className="text-danger">{userInfo.error}</strong>
                  </Row>
                  <div className="my-1">
                    <Form.Group controlId="name">
                      <Form.Label className="text__lable">Name</Form.Label>
                      <Form.Control
                        className="text__field"
                        required
                        type="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group controlId="email">
                      <Form.Label className="text__lable">
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
                          type="password"
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
                    <Form.Group controlId="PasswordConfirm">
                      <Form.Control
                        required
                        type={txt}
                        className={msg ? "is-invalid" : "text__field"}
                        value={confirmpwd}
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPwd(e.target.value)}
                      />

                      {msg && <div className="invalid-feedback">{msg}</div>}
                    </Form.Group>
                  </div>

                  <Row className="justify-content-center">

<Button style={{width:'60%',borderRadius:'0px'}} className="my-4" variant="primary" type="submit">
Register Me.
</Button>


</Row>
                 
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default RegisterPage;
