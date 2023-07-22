import React, { useState, useEffect } from "react";


import offer1 from "../static/offer/o1.png";


import { FaGreaterThan } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

import { useHistory } from "react-router-dom";

import "./css/homeSvgProductComponent.css";

function HomeSvgProductComponent() {
  var [count, setCount] = useState(1);
  const history = useHistory();

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  // const svg1 = 'https://svadya-bucket.s3.ap-south-1.amazonaws.com/frontend_static/bottle.svg';
  function handleScroll() {
    var elem = document.getElementById("ele");

    elem.scrollTo({ left: 250 * count, behavior: "smooth" });
    if (count == 3) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <div className="my-5 " style={{width:'95vw'}}>
     
      
            {isMobile ? 
                <img  src={offer1} style={{width:'95%'}} />

          
          : 
          <img src={offer1} style={{width:'40%'}} />

          
          }

    
    
            

    
  

       
        {/* Scroll 
 
  <div
          id="ele"
          className={
            isMobile
              ? "horizontal-scroll-wrapper-a  squares"
              : "horizontal-scroll-wrapper-a  squares ms"
          }
        >
          <div className="svg__product__img">
            <img src={svg1} style={{ height: "250px" }} />
            <Row className="justify-content-center py-0 my-0">
              <h5 style={{ marginTop: "15px" }} className="coustard">
                Ajwain Honey - 500 G
              </h5>
            </Row>

            <Row className="justify-content-center py-1 my-0">
              <button
                onClick={(e) => history.push("/product/18")}
                className="button-30 "
              >
                Buy Now
              </button>
            </Row>
          </div>

          <div className="svg__product__img">
            <img src={ghee1} style={{ height: "250px" }} />
            <Row className="justify-content-center py-0 my-0">
              <h5 style={{ marginTop: "15px" }} className="coustard">
                Cow Ghee - 500 G
              </h5>
            </Row>

            <Row className="justify-content-center py-1 my-0">
              <button
                onClick={(e) => history.push("/product/20")}
                className="button-30 "
              >
                Buy Now
              </button>
            </Row>
          </div>
          <div className="svg__product__img">
            <img src={svg1} style={{ height: "250px" }} />
            <Row className="justify-content-center py-0 my-0">
              <h5 style={{ marginTop: "15px" }} className="coustard">
                Multi Honey - 500 G
              </h5>
            </Row>

            <Row className="justify-content-center py-1 my-0">
              <button
                onClick={(e) => history.push("/product/19")}
                className="button-30 "
              >
                Buy Now
              </button>
            </Row>
          </div>
        </div>
       
 {!isMobile && (
          <button
            onClick={handleScroll}
            className="homepage_a_svg_product_button"
          >
            <FaGreaterThan
              style={{
                height: "50px",
                width: "1.5vw",
                color: "rgba(255,255,255,0.8)",
              }}
            />
          </button>
        )}
 */}
      
    </div>
  );
}

export default HomeSvgProductComponent;
