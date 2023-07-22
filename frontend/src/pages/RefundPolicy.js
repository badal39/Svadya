import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function RefundPolicy() {
  return (
    <div>
      <Container>
        <h2
          className="slabo my-3"
          style={{ textAlign: "center", color: "black", paddingBottom: "25px" }}
        >
          Svadya: Refund Policy
        </h2>

        <Row className="justify-content-center mx-3">
          <p className="coustard">
            Our policy lasts 15 days. If 15 days have gone by since your
            purchase, unfortunately we can’t offer you a refund or exchange. To
            be eligible for a return, your item must be unused and in the same
            condition that you received it. It must also be in the original
            packaging.
          </p>
        </Row>

        <h5
          className="slabo my-2 py-2"
          style={{ textAlign: "center", color: "black" }}
        >
          Refunds (if applicable)
        </h5>
        <Row className="justify-content-center mx-3">
          <p className="coustard">
            Once your return is received and inspected, we will send you an
            email to notify you that we have received your returned item. We
            will also notify you of the approval or rejection of your refund. If
            you are approved, then your refund will be processed, and a credit
            will automatically be applied to your credit card or original method
            of payment, within a certain amount of days.
          </p>
        </Row>

        <h5
          className="slabo my-2 py-2"
          style={{ textAlign: "center", color: "black" }}
        >
          Late or missing refunds (if applicable){" "}
        </h5>
        <Row className="justify-content-center mx-3">
          <p className="coustard">
            If you haven’t received a refund yet, first check your bank account
            again. Then contact your credit card company, it may take some time
            before your refund is officially posted. Next contact your bank.
            There is often some processing time before a refund is posted. If
            you’ve done all of this and you still have not received your refund
            yet, please contact us at himanshuguddi.hp@gmail.com .
          </p>
        </Row>

        <h5
          className="slabo my-2 py-2"
          style={{ textAlign: "center", color: "black" }}
        >
          Sale items (if applicable)
        </h5>
        <Row className="justify-content-center mx-3">
          <p className="coustard">
            Only regular priced items may be refunded, unfortunately sale items
            cannot be refunded.
          </p>
        </Row>

        <h5
          className="slabo my-2 py-2"
          style={{ textAlign: "center", color: "black" }}
        >
          Exchanges (if applicable)
        </h5>
        <Row className="justify-content-center mx-3">
          <p className="coustard">
            We only replace items if they are defective or damaged.  If you need
            to exchange it for the same item, send us an email
            at himanshuguddi.hp@gmail.com or send it to C-204, TITANIUM SQUARE, NR THALTEJ CROSS
ROAD, S.G. HIGHWAY, THALTEJ, Ahmedabad
Municipal Corporation, Gujarat-380054
          </p>
        </Row>

        <h5
          className="slabo my-2 py-2"
          style={{ textAlign: "center", color: "black" }}
        >
          Shipping
        </h5>
        <Row className="justify-content-center mx-3">
          <p className="coustard">
            To return your product, you should mail your product to: C-204, TITANIUM SQUARE, NR THALTEJ CROSS
ROAD, S.G. HIGHWAY, THALTEJ, Ahmedabad
Municipal Corporation, Gujarat-380054. You will be
            responsible for paying for your own shipping costs for returning
            your item. Shipping costs are non-refundable. If you receive a
            refund, the cost of return shipping will be deducted from your
            refund. Depending on where you live, the time it may take for your
            exchanged product to reach you, may vary.
          </p>
        </Row>
      </Container>
    </div>
  
  
  
  );
}

export default RefundPolicy;
