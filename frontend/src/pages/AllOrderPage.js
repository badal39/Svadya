import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMyOrders } from "../actions/orderActions";
import {TimeHandler} from '../components/TimeHandler'
import { Link } from "react-router-dom";

import Loading from '../components/Loading'

import Rating from '../components/Rating'

import {
  Row,
  Col,
  Container,
  Card,
  ListGroup,
  Button,
  ListGroupItem,
  Image,
} from "react-bootstrap";

import "../css/allOrder.css";

import "../css/user_profile.css";

import { light } from "@material-ui/core/styles/createPalette";

function AllOrderPage({history}) {

  
  
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin 


  const dispatch = useDispatch();

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;




  useEffect(() => {
    if (userInfo.IsuserLogin==false) {
      history.push('/login?redirect=order')

  } else {


    dispatch(listMyOrders());
  }
  }, [dispatch]);
 

  

  return (
    <Container className="my-5 ">

    <Row>
      <Col md={3} className="py-0">
        <ListGroup variant="flush">
          <ListGroup.Item className=" user_profile_detail">
            <strong>
              {" "}
              <h3>Profile</h3>
            </strong>
            <Link to="/profile" className="profile__menu__text">
              <p>{userInfo.name}</p>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="user_profile_detail">
            <strong>
              {" "}
              <h3>Orders</h3>
            </strong>
            <Link to="/order" className="profile__menu__text">
              <p style={{ color: "rgb(145,221,191)" }}>Order & Returns</p>
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      {loadingOrders === true ? (

         <Loading/>
) : (
        <Col xs={12} md={9} className="my-2 ">
          <Row className="justify-content-center">
            <h4>My Orders</h4>
          </Row>
          {orders.reverse().map((order) => (
            <Card
              className="my-5 orders__card"
              style={{ width: "100wh" }}
              key={order._id}
            >
              <div className="mx-2 my-3">
                <span className=" px-1">
                  <strong>Order Number</strong>{" "}
                  <strong className="text-info"> #{order._id} </strong>
                </span>
                <span style={{ fontSize: "13px" }} className="mx-2">
                  Placed on <strong>{TimeHandler(order.createdAt)}</strong>
                </span>
              </div>
              <Row className="justify-content-center my-2">
             <h5><strong>Ordered items</strong></h5>
             </Row>
             <ListGroup>
              {order.orderItems.map((item) => (
                <ListGroup.Item key={item._id}>
                <Row className="my-0 py-0" >
                  
                    <Col className="mx-2" xs={5} md={3}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    
                  </Col>
                  <Col xs={4} className="px-0 mx-0">   
                       <p className="py-0 my-0"><strong>{item.name}</strong></p>
                       <p style={{fontSize:'15px'}} className="py-0 my-0 lead">by gangdi Farm</p> 
                       <p style={{fontSize:'15px'}} className=" my-4 lead">QTY {item.qty} | <span className="lead" style={{color:"black"}}>Rs.{item.price*item.qty}</span></p>
                  </Col>


                </Row>

                <Row className="">

    <Link to={`/product/reviews/${item.product}/alyhdkles01kdhtbcdtsjhhvbf445`}>Review Product</Link>



               
                </Row>
                

                </ListGroup.Item>
              ))}


              
              </ListGroup>
              
              <li className="list-group-item d-flex justify-content-between align-items-center">
             <strong>Total : {order.totalPrice}</strong>
    <span >
    <Button variant="success" onClick={ (e) => {history.push(`/order/${order._id}`)}}>Track Order</Button>


    </span>
    </li>
            </Card>
          ))}
        </Col>
      )}
    </Row>
  
  </Container>
  );
}

export default AllOrderPage;
