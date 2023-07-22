// Module import

import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Carousel,
  Container,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";

import { useMediaQuery } from "react-responsive";

import AboutUs from "../components/AboutUs";

import { PRODUCT_DETAILS_RESET } from "../constants/productConstants";

import "./css/productPage.css";

import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

import Loading from "../components/Loading";

import Message from "../components/Message";


// icons  import { FaCartPlus } from "react-icons/fa";

function ProductPage({ location,match }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  const [tag, setTag] = useState(location.search ? location.search.split("=")[1] : "all");






  // const red_tag = location.search ? location.search.split("=")[1] : "/";
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  useEffect(() => {
    dispatch(listProducts(tag));

    dispatch({ type: PRODUCT_DETAILS_RESET });

   

  }, [dispatch]);

  return (
    <>
      <Container className="py-3 ">
      
        {loading ? (
          <>
            <Loading />
          </>
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          
            <Row>
              {products.map((product) => (
                <Col
                  className="py-3 "
                  key={product._id}
                  xs={12}
                  md={6}
                  lg={4}
                  xl={4}
                >
                  <Products product={product} />
                </Col>
              ))}
            </Row>
          
          
        )}
      </Container>

      {!loading && <AboutUs />}
    </>
  );
}

export default ProductPage;
