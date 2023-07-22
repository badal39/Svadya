import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getOrderDetails } from "../actions/orderActions";
import "../css/order_detail.css";

import Loading from "../components/Loading";

import { API_PREFIX } from "../constants/apiPrifixConstant";

import { Link } from "react-router-dom";

import {
  Row,
  Col,
  Container,
  Card,
  ListGroup,
  Button,
  ListGroupItem,
  Form,
  ProgressBar,
  Image,
} from "react-bootstrap";

import "../css/user_profile.css";

function OrderDetails({ match, history }) {
  const orderId = match.params.id;
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, error, loading } = orderDetails;

  useEffect(() => {
    if (userInfo.IsuserLogin == false) {
      history.push("/login?redirect=order");
    } else {
      if (!order || order._id !== Number(orderId)) {
        dispatch(getOrderDetails(orderId));
      }
    }
  }, [order, orderId, userInfo]);

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Row className="justify-content-center">
        <Card className="order__details__card">
          <Card.Header>
            <Row className="justify-content-center">
              <strong>Order Details</strong>
            </Row>
          </Card.Header>

          <ListGroup variant="flush">
            <ListGroup.Item className="py-0">
              <Row className="py-3">
                {" "}
                <strong style={{ color: "black" }}>Shipping Details </strong>
              </Row>
              <h6 className="py-1 ">{order.user.name}</h6>

              <p className="py-0 my-0">
                {" "}
                <strong className="py-0 my-0">address : </strong>
                {order.shippingAddress.address}
              </p>

              <p className="py-0 my-0">
                {" "}
                <strong className="py-0 my-0">City : </strong>{" "}
                {order.shippingAddress.city}
              </p>
              <p className="py-0 my-0">
                {" "}
                <strong className="py-0 my-0">Pin-code : </strong>{" "}
                {order.shippingAddress.pinCode}
              </p>
              <p className="py-0 my-0">
                {" "}
                <strong className="py-0 my-0">State : </strong>{" "}
                {order.shippingAddress.state}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              {order.isDelivered ? (
                <ProgressBar variant="success" animated now={100} />
              ) : (
                <>
                  {" "}
                  {order.isOutForDelivered ? (
                    <ProgressBar
                      variant={"info"}
                      animated
                      now={70}
                    />
                  ) : (
                    <ProgressBar
                      variant={"dark"}
                      animated
                      now={10}
                    />
                  )}{" "}
                </>
              )}

              <Container>
                <Row className="py-2">
                  <Col
                    md={5}
                    xs={5}
                    style={{ fontSize: "12px" }}
                    className="px-0 mx-0"
                  >
                    Order Placed
                  </Col>
                  <Col
                    md={6}
                    xs={5}
                    style={{ fontSize: "12px" }}
                    className="px-0 mx-0"
                  >
                    Out For Delivery
                  </Col>
                  <Col
                    md={1}
                    xs={2}
                    style={{ fontSize: "12px" }}
                    className="px-0 mx-0"
                  >
                    Delivered
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
            <ListGroup.Item className="py-2">
              <Row>
                {" "}
                <strong style={{ color: "black" }}>Order Items </strong>
              </Row>

              {order.orderItems.map((item) => (
                <Row key={item._id} className="py-2">
                  <Row>
                    <Col xs={6} md={3}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                  </Row>
                  <Row className="py-1 my-2">
                    <Col className="px-4">
                      <span className="text-success"> {item.name}</span> |
                      <span className=" px-1">
                        {item.qty}
                        <img
                          className="px-1"
                          src="https://img.icons8.com/small/16/000000/multiply.png"
                        />
                        <img src="https://img.icons8.com/small/16/000000/rupee.png" />
                        {item.price}

                        <strong className="px-2">=</strong>
                        <img src="https://img.icons8.com/small/16/000000/rupee.png" />

                        {item.qty * item.price}
                      </span>
                    </Col>
                  </Row>

                  <Col></Col>
                </Row>
              ))}
            </ListGroup.Item>

            <ListGroup.Item className="py-3">
              <Row className=" mx-3 justify-content-center">
                <strong>
                  <h6>Order Summary</h6>
                </strong>
              </Row>
              <Row>
                <Col xs={7} md={7}>
                  <Row className="my-2">
                    <h5>SubTotal</h5>
                  </Row>
                  <Row className="my-2">
                    <h5>Delivery Charges</h5>
                  </Row>
                  {/* <Row className="my-2">
                    <h5>Tax</h5>
                  </Row>*/}
                </Col>
                <Col>
                  <Row className="justify-content-center my-2">
                    <h5>
                      <img src="https://img.icons8.com/small/16/000000/rupee.png" />
                      {(
                        order.totalPrice -
                        order.shippingPrice -
                        order.taxPrice
                      ).toFixed(2)}
                    </h5>
                  </Row>
                  <Row className="justify-content-center my-2">
                    <h5>
                      <img src="https://img.icons8.com/small/16/000000/rupee.png" />
                      {order.shippingPrice}
                    </h5>
                  </Row>
                  {/*<Row className="justify-content-center my-2">
                    <h5>
                      <img src="https://img.icons8.com/small/16/000000/rupee.png" />
                      {order.taxPrice}
                    </h5>
                  </Row> */}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col xs={7} md={7}>
                  <h3>Total</h3>
                </Col>

                <Col>
                  <Row className="justify-content-center">
                    <h3>
                      <img src="https://img.icons8.com/small/20/000000/rupee.png" />
                      {order.totalPrice}
                    </h3>
                  </Row>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row className="py-4">
                {" "}
                <strong style={{ color: "black" }}>Payment Status </strong>
              </Row>

              {order.isPaid === false ? (
                <div
                  style={{ opacity: "0.8" }}
                  className="alert alert-dismissible alert-warning"
                >
                  <strong>Not Paid</strong>
                </div>
              ) : (
                <div
                  style={{ opacity: "0.8" }}
                  className="alert alert-dismissible alert-success"
                >
                  <strong>Paid</strong>
                </div>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <Row className="py-2">
                {" "}
                <strong style={{ color: "black" }}>Updates sent to</strong>
              </Row>

              <li
                style={{ border: "transparent" }}
                className="list-group-item d-flex  align-items-center"
              >
                <img src="https://img.icons8.com/ultraviolet/18/000000/email-open--v2.png" />

                <strong style={{ fontSize: "18px" }} className="px-2">
                  {order.user.email}
                </strong>
              </li>
            </ListGroup.Item>

            <ListGroup.Item>
              <p style={{ textAlign: "center", fontSize: "25px" }}>
                <span className="qahiri"> Order ID # {order._id}</span> |{" "}
                <span className="qahiri">
                  {" "}
                  ORDERD AT : {order.createdAt.substring(11, 16)}
                </span>
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Row>
      <Row className="py-5"></Row>
    </Container>
  );
}

export default OrderDetails;
