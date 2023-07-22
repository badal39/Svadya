// DummyData import

// Module import
import React from "react";
import offertag from "../static/offer/offertag.png";


import { useHistory } from "react-router-dom";

import { Card, Image, Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// Components import

// Css import
import "./css/products.css";

// icons

import { FaCartPlus } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";

import { API_PREFIX } from "../constants/apiPrifixConstant";

function Products({ product }) {
  const history = useHistory();

  return (
    <>

    <Card
      className="products__container "
      style={{
        border: "transparent",
        backgroundColor: "rgba(255,255,255,0.6)",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <Link to={`/product/${product._id}`} className="product__text">
        {product.tag===1 || product.tag===3 ? 

<div style={{position:'relative',top:'0',left:'0'}}>
<img style={{position:'relative',height:'450px',width:'100%'}} variant="top" src={product.image} alt={product.name} />

<img  src={offertag} style={{height:'80px',position:'absolute',top:'0',left:'0'}} />
</div>
:
<img style={{position:'relative',height:'450px',width:'100%'}} variant="top" src={product.image} alt={product.name} />

      }
       
        <Card.Body className="py-1  ">
          <Row className="justify-content-center my-2">
            <h5 className="font-weight-light product__prise__text ">
              {product["name"]}
            </h5>
          </Row>

          <Row className="justify-content-center my-2">
            <h6 className="font-italic text-muted">{product["description"]}</h6>
          </Row>

          <Row className="justify-content-center my-2">
            <h2 className="">
              <BiRupee style={{ width: "25px", height: "25px" }} />{" "}
              {product["price"]}
            </h2>
          </Row>
        </Card.Body>
      </Link>

      {product.countInStock != 0 ? 
      
      <p style={{ textAlign: "right" }} className="py-0 my-0">
        <button
          className="product__addtocard__button"
          onClick={(e) => history.push(`/cart/${product._id}?qty=${1}`)}
        >
          <FaCartPlus style={{ color: "white" }} />
        </button>
      </p>
      :
<p style={{ textAlign: "right" }} className="py-0 my-0">
      <span style={{fontSize:'25px',borderRadius:'0px'}} className="badge bg-danger">Out of Stock</span>

      </p>

      
      } 

      
    </Card>
    </>
  );
}

export default Products;
