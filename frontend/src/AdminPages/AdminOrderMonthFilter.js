import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { BiRupee } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';

import { TiTick } from 'react-icons/ti';

import {

  API_PREFIX

} from "../constants/apiPrifixConstant"


import axios from "axios";

function AdminOrderMonthFilter() {
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(2021);
  const [orders, setOrders] = useState([]);

  var year_array = [
    2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032,
    2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040,
  ];

  async function getOrders() {
    const result = await axios.get(API_PREFIX+process.env.REACT_APP_API_ADMIN_ORDER_MONTH_FILTER+year+'/'+month);
    setOrders(result.data);
    

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }
  }

  useEffect(() => {
    getOrders();
    
  
  }, [month]);

  return (
    <div>
      <Container>
        <Form>
          <Form.Row className="my-4">
            <Col>
              <Form.Label>Year</Form.Label>
              <Form.Control
                as="select"
                value={year}
                required
                onChange={(e) => [setYear(e.target.value), setMonth(0)]}
              >
                {month === 0 && (
                  <option className="test-black" value="0">
                    Select Year
                  </option>
                )}

                {year_array.map((array) => (
                  <option key={array} className="test-black" value={array}>
                    {array}
                  </option>
                ))}
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Month</Form.Label>
              <Form.Control
                as="select"
                value={month}
                required
                onChange={(e) => setMonth(e.target.value)}
              >
                {month === 0 && (
                  <option className="test-black" value="0">
                    Select Month
                  </option>
                )}

                <option className="test-black" value="1">
                  January
                </option>
                <option className="test-black" value="2">
                  February
                </option>
                <option className="test-black" value="3">
                  March
                </option>
                <option className="test-black" value="4">
                  April
                </option>
                <option className="test-black" value="5">
                  May
                </option>
                <option className="test-black" value="6">
                  June
                </option>
                <option className="test-black" value="7">
                  July
                </option>
                <option className="test-black" value="8">
                  August
                </option>
                <option className="test-black" value="9">
                  September
                </option>
                <option className="test-black" value="10">
                  October
                </option>
                <option className="test-black" value="11">
                  November
                </option>
                <option className="test-black" value="12">
                  December
                </option>
              </Form.Control>
            </Col>
          </Form.Row>
        </Form>

        {orders.length === 0 ? (
          <h1>No Orders This Month</h1>
        ) : (
            <div>
                
                <p className="coustard">Total Orders :-- {orders.length}</p>
                <p className="coustard">Total Price :-- <BiRupee/>{orders[orders.length-1][0].totalPrice}</p>
                <p className="coustard">Total Commission as 4% is :-- <BiRupee/>{((orders[orders.length-1][0].totalPrice)*4)/100}</p>
                <p className="coustard">Commission Paid Status :-- {(orders[orders.length-1][0].paidStatus)===true ? 
              <TiTick style={{fontSize:'30px',color:'green'}} />  
            :
            <ImCross style={{fontSize:'20px',color:'red'}}/>

            } 
                
                </p>

            </div>
          
        )}
      </Container>
    </div>
  );
}

export default AdminOrderMonthFilter;
