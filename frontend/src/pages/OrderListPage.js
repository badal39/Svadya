import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table,Container, Button, Row ,DropdownButton ,Dropdown } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { listOrders } from "../actions/orderActions";

import { TimeHandler } from "../components/TimeHandler";

function OrderListPage({ history }) {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [filter,setFilter] = useState('A')

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);



  const TableHandler = (order) => {

   
 

  if(filter=="D"){
           if(order.isDelivered){
          
            return (
              <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.user && order.user.name}</td>
              <td>{order.shippingAddress.phoneNum}</td>
              <td>{order.user.email}</td>
              <td>{TimeHandler(order.createdAt)}</td>
              <td>Rs. {order.totalPrice}</td>
          
              <td>
                <Row className="justify-content-center">
                  {order.isOutForDelivered ? (
                    <img src="https://img.icons8.com/fluent-systems-filled/18/26e07f/double-tick.png" />
                  ) : (
                    <img src="https://img.icons8.com/metro/18/fa314a/multiply.png" />
                  )}
                </Row>
              </td>
          
              <td>
                <Row className="justify-content-center">
                  {order.isDelivered ? (
                    <img src="https://img.icons8.com/fluent-systems-filled/18/26e07f/double-tick.png" />
                  ) : (
                    <img src="https://img.icons8.com/metro/18/fa314a/multiply.png" />
                  )}
                </Row>
              </td>
          
              <td>
                <LinkContainer to={`/admin/order/${order._id}`}>
                  <Button variant="light" className="btn-sm">
                    Details
                  </Button>
                </LinkContainer>
              </td>
            </tr>
          )           }
  }

  
  else if(filter=="ND"){
    if(order.isDelivered==false){
          
      return (
        <tr key={order._id}>
        <td>{order._id}</td>
        <td>{order.user && order.user.name}</td>
        <td>{order.shippingAddress.phoneNum}</td>
        <td>{order.user.email}</td>
        <td>{TimeHandler(order.createdAt)}</td>
        <td>Rs. {order.totalPrice}</td>
    
        <td>
          <Row className="justify-content-center">
            {order.isOutForDelivered ? (
              <img src="https://img.icons8.com/fluent-systems-filled/18/26e07f/double-tick.png" />
            ) : (
              <img src="https://img.icons8.com/metro/18/fa314a/multiply.png" />
            )}
          </Row>
        </td>
    
        <td>
          <Row className="justify-content-center">
            {order.isDelivered ? (
              <img src="https://img.icons8.com/fluent-systems-filled/18/26e07f/double-tick.png" />
            ) : (
              <img src="https://img.icons8.com/metro/18/fa314a/multiply.png" />
            )}
          </Row>
        </td>
    
        <td>
          <LinkContainer to={`/admin/order/${order._id}`}>
            <Button variant="light" className="btn-sm">
              Details
            </Button>
          </LinkContainer>
        </td>
      </tr>
    )     }

  }

  else if(filter=="D&P"){
    if(order.isDelivered && order.isPaid){
          
      return (
        <tr key={order._id}>
        <td>{order._id}</td>
        <td>{order.user && order.user.name}</td>
        <td>{order.shippingAddress.phoneNum}</td>
        <td>{order.user.email}</td>
        <td>{TimeHandler(order.createdAt)}</td>
        <td>Rs. {order.totalPrice}</td>
    
        <td>
          <Row className="justify-content-center">
            {order.isOutForDelivered ? (
              <img src="https://img.icons8.com/fluent-systems-filled/18/26e07f/double-tick.png" />
            ) : (
              <img src="https://img.icons8.com/metro/18/fa314a/multiply.png" />
            )}
          </Row>
        </td>
    
        <td>
          <Row className="justify-content-center">
            {order.isDelivered ? (
              <img src="https://img.icons8.com/fluent-systems-filled/18/26e07f/double-tick.png" />
            ) : (
              <img src="https://img.icons8.com/metro/18/fa314a/multiply.png" />
            )}
          </Row>
        </td>
    
        <td>
          <LinkContainer to={`/admin/order/${order._id}`}>
            <Button variant="light" className="btn-sm">
              Details
            </Button>
          </LinkContainer>
        </td>
      </tr>
    )     }

  }
  else if(filter=="OFD"){
    if(order.isOutForDelivered){
          
        return (
        <tr key={order._id}>
        <td>{order._id}</td>
        <td>{order.user && order.user.name}</td>
        <td>{order.shippingAddress.phoneNum}</td>
        <td>{order.user.email}</td>
        <td>{TimeHandler(order.createdAt)}</td>
        <td>Rs. {order.totalPrice}</td>
    
        <td>
          <Row className="justify-content-center">
            {order.isOutForDelivered ? (
              <img src="https://img.icons8.com/fluent-systems-filled/18/26e07f/double-tick.png" />
            ) : (
              <img src="https://img.icons8.com/metro/18/fa314a/multiply.png" />
            )}
          </Row>
        </td>
    
        <td>
          <Row className="justify-content-center">
            {order.isDelivered ? (
              <img src="https://img.icons8.com/fluent-systems-filled/18/26e07f/double-tick.png" />
            ) : (
              <img src="https://img.icons8.com/metro/18/fa314a/multiply.png" />
            )}
          </Row>
        </td>
    
        <td>
          <LinkContainer to={`/admin/order/${order._id}`}>
            <Button variant="light" className="btn-sm">
              Details
            </Button>
          </LinkContainer>
        </td>
      </tr>
    )
     }

  }


  else if(filter=="NOFD"){
    if(order.isOutForDelivered==false){
          
        return (
        <tr key={order._id}>
        <td>{order._id}</td>
        <td>{order.user && order.user.name}</td>
        <td>{order.shippingAddress.phoneNum}</td>
        <td>{order.user.email}</td>
        <td>{TimeHandler(order.createdAt)}</td>
        <td>Rs. {order.totalPrice}</td>
    
        <td>
          <Row className="justify-content-center">
            {order.isOutForDelivered ? (
              <img src="https://img.icons8.com/fluent-systems-filled/18/26e07f/double-tick.png" />
            ) : (
              <img src="https://img.icons8.com/metro/18/fa314a/multiply.png" />
            )}
          </Row>
        </td>
    
        <td>
          <Row className="justify-content-center">
            {order.isDelivered ? (
              <img src="https://img.icons8.com/fluent-systems-filled/18/26e07f/double-tick.png" />
            ) : (
              <img src="https://img.icons8.com/metro/18/fa314a/multiply.png" />
            )}
          </Row>
        </td>
    
        <td>
          <LinkContainer to={`/admin/order/${order._id}`}>
            <Button variant="light" className="btn-sm">
              Details
            </Button>
          </LinkContainer>
        </td>
      </tr>
    )
     }

  }


  else{
      return (
        <tr key={order._id}>
        <td>{order._id}</td>
        <td>{order.user && order.user.name}</td>
        <td>{order.shippingAddress.phoneNum}</td>
        <td>{order.user.email}</td>
        <td>{TimeHandler(order.createdAt)}</td>
        <td>Rs. {order.totalPrice}</td>
    
        <td>
          <Row className="justify-content-center">
            {order.isOutForDelivered ? (
              <img src="https://img.icons8.com/fluent-systems-filled/18/26e07f/double-tick.png" />
            ) : (
              <img src="https://img.icons8.com/metro/18/fa314a/multiply.png" />
            )}
          </Row>
        </td>
    
        <td>
          <Row className="justify-content-center">
            {order.isDelivered ? (
              <img src="https://img.icons8.com/fluent-systems-filled/18/26e07f/double-tick.png" />
            ) : (
              <img src="https://img.icons8.com/metro/18/fa314a/multiply.png" />
            )}
          </Row>
        </td>
    
        <td>
          <LinkContainer to={`/admin/order/${order._id}`}>
            <Button variant="light" className="btn-sm">
              Details
            </Button>
          </LinkContainer>
        </td>
      </tr>
    )

    
  }

  
  }





  return (
    <div>
        <Container className="">
        <Row className="justify-content-between py-2">
    


        <h5>Orders</h5>
      
        
        <DropdownButton
  title="Filter"
  id="dropdown-menu-align-right"
  className="btn-success"

  variant="dark"
>

  <Dropdown.Item 
  onClick ={() => setFilter('D')} 
  eventKey="1">Delivered Orders</Dropdown.Item>
  <Dropdown.Item 
  onClick ={() => setFilter('OFD')} 
  eventKey="2">Out For Delivered</Dropdown.Item>
    <Dropdown.Item
  onClick ={() => setFilter('D&P')} 
  eventKey="3">Delivered <strong className="text-info">&</strong> Paid Orders</Dropdown.Item>
    <Dropdown.Divider />


  <Dropdown.Item 
  onClick ={() => setFilter('NOFD')} 
  eventKey="2"><strong className="text-danger">Not Out For Delivered</strong> </Dropdown.Item>
  <Dropdown.Item 
  onClick ={() => setFilter('ND')} 
  eventKey="2"><strong className="text-danger">Not Delivered</strong> </Dropdown.Item>
   <Dropdown.Divider />
  <Dropdown.Item
  onClick ={() => setFilter('A')} 
  eventKey="4">All Orders</Dropdown.Item>
</DropdownButton>


      </Row>

      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table">
          <thead>
            <tr className="table-dark">
              <th>ID</th>
              <th>USER</th>
              <th>Phone No.</th>
              <th>Email</th>
              <th>Order Placed On </th>
              <th>Total</th>
              <th>Out For Delivered</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {orders.reverse().map((order) => (
              <>
                {TableHandler(order)}
                </>
        
        ))}
          </tbody>
        </Table>
      )}
            </Container>

    </div>
  );
}

export default OrderListPage;
