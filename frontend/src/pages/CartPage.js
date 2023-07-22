import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Container,
} from "react-bootstrap";
import { addToCart, removeFromCart } from "../actions/cartActions";

import { RiDeleteBin6Line } from "react-icons/ri";

import "../css/cart.css";
import svg23 from "../static/svg/21.svg";

import { API_PREFIX } from "../constants/apiPrifixConstant";

function CartPage({ match, history }) {
  const productId = match.params.id;
  const qty_search = useLocation().search;
  const qty = qty_search ? Number(qty_search.split("=")[1]) : 1;
  //const [count, setcount] = useState(0);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const ckeckOutHandler = () => {
    history.push("/shipping");
    // history.push("/shipping");
  };

  const ContinueShoppingHandler = () => {
    history.push("/products");
  };

  return (
    <Container>
      <Row className="" style={{ color: "white" }}>
        <Col>
          {cartItems.length === 0 ? (
            <div>
              <h1 className="coustard">Cart is empty</h1>

              <p className="py-5" style={{ textAlign: "center" }}>
                {" "}
                <img src={svg23} className=" " />
              </p>

              <p style={{ textAlign: "center" }}>
                <Button
                  style={{ color: "black", backgroundColor: "white" }}
                  className=" sigmar-One btn-info my-3"
                  onClick={ContinueShoppingHandler}
                >
                  Grab Something
                </Button>
              </p>
            </div>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item
                  key={item.product}
                  className="my-3 cart__background"
                >
                  <Row className="">
                    <Col xs={5} md={3}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>

                    <Col></Col>
                  </Row>

                  <Row className=" d-flex  justify-content-between align-items-center">
                    <span className="my-3 mx-3">
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </span>
                    <span className="text-muted">
                      <h6>Rs.{item.price}</h6>
                    </span>
                  </Row>

                  <Row className=" d-flex my-2  justify-content-between align-items-center">
                    <Col>
                      <Row className="" style={{ margin: "auto" }}>
                        <Button
                          variant="dark"
                          disabled={item.qty === 1}
                          style={{
                            color: "white",
                            borderRadius: "2px 2px 2px 2px",
                          }}
                          onClick={(e) =>
                            dispatch(addToCart(item.product, item.qty - 1))
                          }
                        >
                          <img src="https://img.icons8.com/android/12/ffffff/minus.png" />{" "}
                        </Button>
                        <input
                          style={{
                            width: "50px",
                            height: "40px",
                            borderLeft: "transparent",
                            borderRight: "transparent",
                            borderRadius: "2px 2px 2px 2px",
                          }}
                          className="form-control "
                          value={item.qty}
                          id={item.product}
                          onChange={() => 0}
                        />
                        <Button
                          variant="dark"
                          style={{
                            borderRadius: "2px 2px 2px 2px",
                          }}
                          disabled={item.qty === 15}
                          onClick={(e) =>
                            dispatch(addToCart(item.product, item.qty + 1))
                          }
                        >
                          <img src="https://img.icons8.com/android/12/26e07f/plus.png" />{" "}
                        </Button>
                        <Button
                          className="mx-3"
                          variant="light"
                          style={{
                            backgroundColor: "transparent",
                            borderRadius: "2px 2px 2px 2px",
                            border: "1px solid grey",
                          }}
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          <RiDeleteBin6Line />
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
              <ListGroup.Item className="cart__background">
                <Row className=" d-flex my-2  justify-content-between align-items-center">
                  <span className="text-bold">
                    <h5>
                      {" "}
                      Item :{" "}
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
                    </h5>
                  </span>

                  <span>
                    <h5>
                      Total : Rs.{" "}
                      {cartItems
                        .reduce((acc, item) => acc + item.qty * item.price, 0)
                        .toFixed(0)}
                    </h5>
                  </span>
                </Row>

                <Row className="text-muted" style={{ fontSize: "15px" }}>
                  Delivery charge and taxes calculated at Checkout
                </Row>

                <Row className=" d-flex my-2  justify-content-between align-items-center">
                  <span className="my-2">
                    <Button
                      className="btn-block btn-info my-2"
                      onClick={ContinueShoppingHandler}
                      style={{ borderRadius: "2px 2px 2px 2px" }}
                    >
                      Add More
                    </Button>
                  </span>

                  <span>
                    <Button
                      disabled={cartItems.length === 0}
                      className="btn-block btn-secondary"
                      onClick={ckeckOutHandler}
                      style={{ borderRadius: "2px 2px 2px 2px" }}
                    >
                      Checkout
                    </Button>
                  </span>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage;
