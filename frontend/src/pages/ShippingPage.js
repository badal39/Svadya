import React, { useState, useEffect } from "react";

import { state_arr, city_arr } from "../components/stateData";

import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import Steps from "../components/Steps";

function ShippingPage({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const [firstname, setFirstName] = useState(shippingAddress.firstname);
  const [lastname, setLastName] = useState(shippingAddress.lastname);
  const [email, setEmail] = useState(shippingAddress.email);

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [pinCode, setPinCode] = useState(shippingAddress.pinCode);
  const [state, setState] = useState(shippingAddress.state);
  const [phoneNum, setPhoneNum] = useState(shippingAddress.phoneNum);
  const [numsg, setNuMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (phoneNum.length == 10) {
      dispatch(
        saveShippingAddress({
          firstname,
          lastname,
          email,
          address,
          phoneNum,
          city,
          pinCode,
          state,
        })
      );
      // history.push('/payment')}
      history.push("/placeorder");
    } else {
      setNuMsg("Please Enter Valid Number");
    }
  };

  useEffect(() => {
    if (userInfo.IsuserLogin == false) {
      history.push("/login?redirect=shipping");
      //   <Redirect  to="/login/" />
    }
  }, [userInfo]);

  return (
    <Container>
      <Row className="justify-content-center my-2">
        <Steps i={1} />
      </Row>
      <Form className="my-5" onSubmit={submitHandler}>
        <Form.Row className="my-4">
          <Col xs={6} className="my-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              placeholder="First name"
              value={firstname ? firstname : ""}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>
          <Col xs={6} className="my-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              placeholder="Last name"
              value={lastname ? lastname : ""}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Col>
        </Form.Row>

        <Form.Group controlId="email" className="my-3">
          <Row>
            <Col>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                value={email ? email : ""}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>

            <Col>
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Contact Number"
                required
                value={phoneNum ? phoneNum : ""}
                onChange={(e) => setPhoneNum(e.target.value)}
              />
              <Form.Label className="text-danger">{numsg}</Form.Label>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="city" className="my-3">
          <Row>
            <Col xs={6}>
              <Form.Label>State</Form.Label>
              <Form.Control
                as="select"
                value={state}
                required
                onChange={(e) => [setState(e.target.value),setCity('')]}
              >
                {!state && (
                  <option className="test-black" value="">Select State</option>
                )}

                {state_arr.map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </Form.Control>
            </Col>

            <Col xs={6}>
              <Form.Label>City</Form.Label>
              <Form.Control
                as="select"
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
              >
                {!city && <option className="test-black" value="">Select City</option>}

                {state && (
                  <>
                    {city_arr[state].map((x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))}
                  </>
                )}
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="address"
            placeholder="Enter address"
            required
            value={address ? address : ""}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="Pin Code" className="my-4">
          <Form.Label>Pin code</Form.Label>
          <Form.Control
            placeholder="Enter pin-code"
            required
            value={pinCode ? pinCode : ""}
            onChange={(e) => setPinCode(e.target.value)}
          />
        </Form.Group>

        <Row className="justify-content-center my-5">
          <Button variant="primary" type="submit">
            Continue ChekOut
          </Button>
        </Row>
      </Form>
    </Container>
  );
}

export default ShippingPage;
