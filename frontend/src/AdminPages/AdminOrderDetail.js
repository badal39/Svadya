import React, { useState, useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import { getOrderDetails, deliverOrder,outfordeliverOrder } from "../actions/orderActions";
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from "../constants/orderConstants";

import "../css/order_detail.css";

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

function AdminOrderDetail({ match, history }) {
  const orderId = match.params.id;
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, error, loading } = orderDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  useEffect(() => {
    if (!order || order._id !== Number(orderId) || successDeliver) {
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId));
    }
  }, [order, orderId, successDeliver]);

  const successPaymentHandler = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { response } = await axios.put(`/api/order/${orderId}/pay/`, config);
    window.location.reload();
    // const data = await response.json();
  };

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
    window.location.reload();

  };

  const outfordeliverHandler = () => {
    dispatch(outfordeliverOrder(order));
    window.location.reload();

  };

  return loading ? (
    <h1>loading</h1>
  ) : (
    <Container>
      <Row className="justify-content-center">
        <Card className="order__details__card">
          <Card.Header>
            <Row className="justify-content-center">
              <p style={{ textAlign: "center", fontSize: "25px" }}>
                <span className="coustard"> Order ID # {order._id}</span> |{" "}
                <span className="qahiri">
                  {" "}
                  ORDERD AT : {order.createdAt.substring(11, 16)}
                </span>
              </p>
            </Row>
          </Card.Header>

          <ListGroup variant="flush">
            <ListGroup.Item className="py-0">
              <Row className="py-3">
                {" "}
                <strong style={{ color: "black" }}>Shipping Details </strong>
              </Row>
              <h6 className="py-1">{order.user.name}</h6>
              <h6>
                Address : {order.shippingAddress.address} ,{" "}
                {order.shippingAddress.city} , {order.shippingAddress.state}
              </h6>
              <h6>Pin-Code : {order.shippingAddress.pinCode} </h6>
              <strong>Out For Delivered Status </strong> :{" "}
              {order.isOutForDelivered === false ? (
                <strong className="text-danger">Not Out For Delivered</strong>
              ) : (
                <strong className="text-success">Out For Delivered</strong>
              )}
              <Row className="justify-content-center py-3">
                {order.isOutForDelivered === false && (
                  <Button
                    className="px-3 mx-3"
                    variant="success"
                    onClick={outfordeliverHandler}
                  >
                    Out For Delivered
                  </Button>
                )}
              </Row>
              <strong>Delivery Status</strong> :{" "}
              {order.isDelivered === false ? (
                <strong className="text-danger">Not Delivered</strong>
              ) : (
                <strong className="text-success">Delivered</strong>
              )}
              <Row className="justify-content-center py-3">
                {order.isDelivered === false && (
                  <Button
                    className="px-3 mx-3"
                    variant="success"
                    onClick={deliverHandler}
                  >
                    Delivered
                  </Button>
                )}
              </Row>
            </ListGroup.Item>

            <ListGroup.Item className="py-2">
              <Row>
                {" "}
                <strong style={{ color: "black" }}>Order Items </strong>
              </Row>

              {order.orderItems.map((item) => (
                <Row key={item._id} className="py-2">
                  {console.log(item.image)}
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>

                  <Col md={4}>{item.name}</Col>
                  <Col>
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
                  </Col>
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
                  <Row className="my-2">
                    <h5>Tax</h5>
                  </Row>
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
                  <Row className="justify-content-center my-2">
                    <h5>
                      <img src="https://img.icons8.com/small/16/000000/rupee.png" />
                      {order.taxPrice}
                    </h5>
                  </Row>
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
                    <h3>{order.totalPrice}</h3>
                  </Row>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row className="py-1 my-2">
                {" "}
                <strong style={{ color: "black" }}>Payment Method </strong>
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

              <Row className="justify-content-center py-3">
                {order.isPaid === false && (
                  <Button
                    onClick={successPaymentHandler}
                    className="px-3 mx-3 btn-block"
                    variant="success"
                  >
                    Paid
                  </Button>
                )}
              </Row>
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
              <strong> Order ID # {order._id}</strong>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Row>
    </Container>
  );
}

export default AdminOrderDetail;
