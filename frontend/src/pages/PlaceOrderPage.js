import React, { useState, useEffect } from "react";

import Steps from "../components/Steps";

import axios from "axios";

import PaymentPage from "./PaymentPage";

import { useDispatch, useSelector } from "react-redux";

import {
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Image,
  Container,
} from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

import { ORDER_CREATE_RESET } from "../constants/orderConstants";

import Loading from "../components/Loading";

import { API_PREFIX } from "../constants/apiPrifixConstant";

function PlaceOrderPage({ history }) {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, error, success, loading } = orderCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;

  cart.itemsPrice = cart.cartItems
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);
  cart.shippingPrice =  ((cart.shippingAddress.state == 'Gujarat') ? 0 : 70).toFixed(2) ;

  cart.Discount = 0; // (200).toFixed(2);

  cart.taxPrice = 0; // Number(0.082 * cart.itemsPrice).toFixed(2);

  cart.totalPrice = (
    Number(cart.itemsPrice) + Number(cart.shippingPrice)
  ).toFixed(2);

  useEffect(() => {
    if (cart.itemsPrice == 0) {
      history.push("/cart");
    }

    if (userInfo.isUserLogin == false) {
      history.push("/login");
    }

    if (success) {
      history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [success, history, userInfo]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Row className="justify-content-center my-2">
            <Steps i={2} />
          </Row>
          <Row className="my-3 ">
            <Col md={6} className="my-3">
              <ListGroup variant="flush">
                <ListGroup.Item variant="info">
                  <Row>
                    <Col xs={5} md={5}>
                      <strong>Product</strong>
                    </Col>
                    <Col xs={2} md={2}>
                      <strong>Cost</strong>
                    </Col>
                    <Col xs={3} md={3}>
                      <strong>Quantity</strong>
                    </Col>
                    <Col xs={2} md={2}>
                      <strong>Total</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {cartItems.map((item) => (
                  <ListGroup.Item className="my-2" key={item.product}>
                    <Row>
                      <Col xs={5} md={5}>
                        <Row>
                          <Col md={6} xs={6}>
                            <Image
                              src={
                                item.image
                              }
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col>{item.name}</Col>
                        </Row>
                      </Col>
                      <Col xs={2} md={2}>
                        <Row className="justify-content-center">
                          <img src="https://img.icons8.com/small/16/000000/rupee.png" />

                          {item.price}
                        </Row>
                      </Col>
                      <Col xs={3} md={3}>
                        <Row className="justify-content-center">
                          <img src="https://img.icons8.com/small/16/000000/multiply.png" />
                          {item.qty} =
                        </Row>
                      </Col>
                      <Col xs={2} md={2}>
                        <Row className="justify-content-center">
                          <img src="https://img.icons8.com/small/16/000000/rupee.png" />

                          {item.price * item.qty}
                        </Row>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}

                <ListGroup.Item className="my-4">
                  <h5>
                    <strong>Delivery Address</strong>
                  </h5>

                  <Row>
                    <Col xs={10} md={10}>
                      {shippingAddress.address},{shippingAddress.city},
                      {shippingAddress.state}
                    </Col>
                    <Col xs={2} md={2}>
                      <button
                        onClick={(e) => history.push("/shipping")}
                        style={{ borderRadius: "18px 18px 18px 18px" }}
                        type="button"
                        className="btn btn-outline-dark"
                      >
                        Edit
                      </button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={1}></Col>
            <Col md={5}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row className=" mx-3 justify-content-center">
                    <strong>
                      <h6>Order Summary</h6>
                    </strong>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col xs={7} md={7}>
                      <Row className="my-2">
                        <h5>SubTotal</h5>
                      </Row>
                      <Row className="my-2">
                        <h5>Delivery Charges</h5>
                      </Row>
                      {/*
                  <Row className="my-2">
                    <h5>Tax</h5>
                  </Row>
                  <Row className="my-2">
                    <h5>Discount</h5>
                  </Row>
                
              */}
                    </Col>
                    <Col>
                      <Row className="justify-content-center my-2">
                        <h5>
                          <img src="https://img.icons8.com/small/16/000000/rupee.png" />
                          {cart.itemsPrice}
                        </h5>
                      </Row>
                      <Row className="justify-content-center my-2">
                        
                          {/*   <img src="https://img.icons8.com/small/16/000000/rupee.png" />
                      {cart.shippingPrice} */}
                          {cart.shippingAddress.state === 'Gujarat' ? <h5>Free</h5> : <h5> <img src="https://img.icons8.com/small/16/000000/rupee.png"/>70</h5>}
                        
                      </Row>
                      {/*   <Row className="justify-content-center my-2">
                    <h5>
                      <img src="https://img.icons8.com/small/16/000000/rupee.png" />
                      {cart.taxPrice}
                    </h5>
                  </Row>

                  <Row className="justify-content-center my-2">
                    <h5>
                      <img src="https://img.icons8.com/small/16/000000/rupee.png" />
                      {cart.Discount}
                    </h5>
                  </Row>
                  */}
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
                          <img src="https://img.icons8.com/small/25/000000/rupee.png" />

                          {cart.totalPrice}
                        </h3>
                      </Row>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  {isMobile ? (
                    <Row
                      className="justify-content-center "
                      style={{
                        height: "60px",
                        position: "fixed",
                        bottom: "0",
                        left: "0",
                        right: "0",
                      }}
                    >
                      <PaymentPage />
                    </Row>
                  ) : (
                    <Row className="justify-content-center ">
                      <PaymentPage />
                    </Row>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default PlaceOrderPage;
