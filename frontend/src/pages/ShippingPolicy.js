import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function ShippingPolicy() {
  return (
    <div>
      <Container>
        <h2
          className="slabo my-3"
          style={{ textAlign: "center", color: "black", paddingBottom: "25px" }}
        >
          Svadya: Shipping Policy
        </h2>

        <h5
          className="slabo my-2 py-2"
          style={{ textAlign: "center", color: "black" }}
        >
          What is the estimated delivery time?
        </h5>
        <Row className="justify-content-center mx-3">
          <p className="coustard">
            Delivery times are influenced by product availability, your shipping
            destination In general, our standard delivery timelines are:
          </p>
          <p className="coustard" style={{ color: "black" }}>
            {" "}
            From 2 Days to 5 Days
          </p>
        </Row>

        <h5
          className="slabo my-2 py-2"
          style={{ textAlign: "center", color: "black" }}
        >
          How much does delivery cost?
        </h5>
        <Row className="justify-content-center mx-3">
          <p className="coustard">We Give Free Home Delivery All Over India.</p>
        </Row>

        <h5
          className="slabo my-2 py-2"
          style={{ textAlign: "center", color: "black" }}
        >
          What happens if I am out when delivery is attempted?
        </h5>
        <Row className="justify-content-center mx-3">
          <p className="coustard">
            Your order will be delivered to the delivery address you have
            provided to us. If you weren’t available when the courier partner
            knocked at your door, two additional delivery attempts will follow
            on successive days.
          </p>
        </Row>

        <h5
          className="slabo my-2 py-2"
          style={{ textAlign: "center", color: "black" }}
        >
          When will the deliveries take place?
        </h5>
        <Row className="justify-content-center mx-3">
          <p className="coustard">
            In general, our courier partner will try to deliver between 9:00 and
            18:00. It can be challenging to stay at home for all these hours,
            especially on working days. If you cannot be there at a certain
            hour, try to see if someone else can be at the delivery address to
            accept the parcel on your behalf.
          </p>
        </Row>

        <h5
          className="slabo my-2 py-2"
          style={{ textAlign: "center", color: "black" }}
        >
          How will the packaging look like in case of a door delivery?
        </h5>
        <Row className="justify-content-center mx-3">
          <p className="coustard">
            We ensure highest standards of packaging norms and deliver all our
            products in highly standardized Carton Boxes which will enable there
            are no damages while handling your items.
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default ShippingPolicy;
