// Module import
import React, { useState, useEffect } from "react";
import offertag from "../static/offer/offertag.png";

import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Carousel,
  ListGroupItem,
  Container,
} from "react-bootstrap";
//import axios from 'axios';

import Loading from "../components/Loading";

import Message from "../components/Message";

import { useDispatch, useSelector } from "react-redux";
import { listProductDetails, listProducts } from "../actions/productActions";
import { PRODUCT_DETAILS_RESET } from "../constants/productConstants";

import AboutUs from "../components/AboutUs";
import Products from "./Products";

// Componets import
import { TimeHandler } from "../components/TimeHandler";
import Rating from "../components/Rating";

import "./css/product_profile.css";

// icons

import { API_PREFIX } from "../constants/apiPrifixConstant";

import { BsDot } from "react-icons/bs";

// check it

function ProductProfile({ match, history }) {
  const [tag, setTag] = useState("combo");
  const [count, setcount] = useState(1);
  const [currentimg, setCurrentImg] = useState(0);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productList = useSelector((state) => state.productList);
  const {
    error: listproducterror,
    loading: listproductloading,
    products,
  } = productList;

  const shuffle = (array) => {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  shuffle(products);

  var productReviews = product.reviews;
  if (product.reviews.length > 4) {
    for (let i = 0; i <= 2; i++) {
      productReviews.push(product.reviews[i]);
    }
  }

  useEffect(() => {
    dispatch({ type: PRODUCT_DETAILS_RESET });
    dispatch(listProductDetails(match.params.id));
    dispatch(listProducts(tag));
  }, [dispatch, match.params.id]);

  const addTocartbutton = () => {
    history.push(`/cart/${match.params.id}?qty=${count}`);
  };
  return (
    <>
      <Container>
        {loading ? (
          <Loading />
        ) : error ? (
          <Message style={{ height: "100vh" }} variant="danger">
            {error}
          </Message>
        ) : (
          <>
            <Row className="py-2 ">
              <Col md={1}>
                <img
                  onClick={(e) => setCurrentImg(0)}
                  className="my-2 mx-1"
                  src={product.image}
                  style={{ height: "50px", width: "50px" }}
                />

                {product.image1 && (
                  <img
                    onClick={(e) => setCurrentImg(1)}
                    className="my-2 mx-1"
                    src={product.image1}
                    style={{ height: "50px", width: "50px" }}
                  />
                )}

                {product.image2 && (
                  <img
                    onClick={(e) => setCurrentImg(2)}
                    className="my-2 mx-1"
                    src={product.image2}
                    style={{ height: "50px", width: "50px" }}
                  />
                )}

                {product.image3 && (
                  <img
                    onClick={(e) => setCurrentImg(3)}
                    className="my-2 mx-1"
                    src={product.image3}
                    style={{ height: "50px", width: "50px" }}
                  />
                )}

                {product.image4 && (
                  <img
                    onClick={(e) => setCurrentImg(4)}
                    className="my-2 mx-1"
                    src={product.image4}
                    style={{ height: "50px", width: "50px" }}
                  />
                )}
              </Col>

              <Col md={5}>
                {currentimg === 0 && (
                  <Image
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                    src={product.image}
                    alt={product.name}
                    fluid
                    className="rounded"
                  />
                )}
                {currentimg === 1 && (
                  <Image
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                    src={product.image1}
                    alt={product.name}
                    fluid
                    className="rounded"
                  />
                )}{" "}
                {currentimg === 2 && (
                  <Image
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                    src={product.image2}
                    alt={product.name}
                    fluid
                    className="rounded"
                  />
                )}
                {currentimg === 3 && (
                  <Image
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                    src={product.image3}
                    alt={product.name}
                    fluid
                    className="rounded"
                  />
                )}{" "}
                {currentimg === 4 && (
                  <Image
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                    src={product.image4}
                    alt={product.name}
                    fluid
                    className="rounded"
                  />
                )}
              </Col>
              <Col className md={6}>
                <ListGroup variant="flush">
                  <ListGroup.Item className="product__profile__background border__bottom">
                    <h3>{product["name"]}. </h3>
                    <h6> {product["description"]} </h6>
                  </ListGroup.Item>

                  {product.tag === 1 ? (
                    <ListGroup.Item className="product__profile__background border__bottom">
                      Know More About Svadya Honey{" "}
                      <Link className="px-2" to="/brands/svadya-honey">
                        Here
                      </Link>
                    </ListGroup.Item>
                  ) : (
                    <ListGroup.Item className="product__profile__background border__bottom">
                      Know More About Svadya Ghee{" "}
                      <Link className="px-2" to="/brands/svadya-ghee">
                        Here
                      </Link>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item className="product__profile__background ">
                     <div style={{display:'flex'}} >

                  <h3 style={{position:'relative'}}>
                        <img
                          style={{ width: "25px", height: "25px" }}
                          src="https://img.icons8.com/small/16/000000/rupee.png"
                        />
                        {product["price"]}{" "}
                      </h3>

                      {product.tag===1 || product.tag===3 ?
                      
                      <div style={{position:'relative'}} className="px-5 mx-3">
                      <h3 style={{position:'relative'}}>
                        <img
                          style={{ width: "25px", height: "25px" }}
                          src="https://img.icons8.com/small/16/000000/rupee.png"
                        />
                        {product["price"]+100}{" "}
                      </h3>
                      <h2 style={{position:'absolute',top:'-33%',color:'red'}}>_____</h2>

                    </div>
                    :
                    <>
                    </>
                      
                      }

                    </div>
                    <p className="text-success ">inclusive of all taxes</p>


                    <Card
                      style={{ border: "transparent" }}
                      className="product__profile__background"
                    >
                      {product.countInStock != 0 ? (
                        <>
                          <h5>ENTER QUANTITY</h5>

                          <Row className="py-3" style={{ margin: "auto" }}>
                            <Button
                              variant="primary"
                              disabled={count === 0}
                              style={{
                                width: "50px",
                                height: "40px",
                                color: "white",
                                borderRadius: "2px 2px 2px 2px",
                              }}
                              onClick={() => setcount(count - 1)}
                            >
                              -
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
                              value={"" + count.toString()}
                              id="inputDefault"
                              onChange={() => 0}
                            />
                            <Button
                              disabled={count === 15}
                              variant="primary"
                              style={{
                                width: "50px",
                                height: "40px",
                                color: "white",
                                borderRadius: "2px 2px 2px 2px",
                              }}
                              onClick={() => setcount(count + 1)}
                            >
                              +
                            </Button>
                          </Row>
                          <Row className="py-3">
                            <Col>
                              <Button
                                className="btn-block btn-secondary"
                                disabled={count <= 0}
                                onClick={addTocartbutton}
                              >
                                Add To Cart
                              </Button>
                            </Col>
                          </Row>
                        </>
                      ) : (
                        <div
                          className="card border-danger mb-3"
                          style={{ maxWidth: "20rem" }}
                        >
                          <div className="card-header sigmar-One">
                            Out Of Stock
                          </div>
                          <div className="card-body">
                            <p className="card-text coustard">
                              Sorry For your Inconvenient . We Are Currently Out
                              Of Stock
                            </p>
                          </div>
                        </div>
                      )}
                    </Card>
                  </ListGroup.Item>
                </ListGroup>
              </Col>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <h2 className="poppins px-4 py-3" style={{ fontWeight: "300" }}>
                  {" "}
                  <span className="badge bg-info">Description</span>
                </h2>

                <h4 className="lora px-5 py-1" style={{ fontWeight: "300" }}>
                  {product.name}
                </h4>

                {product.detail0 && (
                  <p
                    style={{ fontSize: "21px", color: "rbga(0,0,0,1)" }}
                    className="px-4 mx-3 poppins"
                  >
                    <span style={{ fontSize: "20px" }}>
                      {" "}
                      <BsDot />{" "}
                    </span>

                    {product.detail0}
                  </p>
                )}

                {product.detail1 !== null && (
                  <p
                    style={{ fontSize: "21px", color: "rbga(0,0,0,1)" }}
                    className="px-4 mx-3 poppins"
                  >
                    <span
                      style={{
                        fontSize: "20px",
                        color: "black",
                        fontWeight: "300",
                      }}
                    >
                      {" "}
                      <BsDot />{" "}
                    </span>

                    {product.detail1}
                  </p>
                )}

                {product.detail2 !== null && (
                  <p
                    style={{ fontSize: "21px", color: "rbga(0,0,0,1)" }}
                    className="px-4 mx-3 poppins"
                  >
                    <span style={{ fontSize: "20px" }}>
                      {" "}
                      <BsDot />{" "}
                    </span>
                    {product.detail2}
                  </p>
                )}

                {product.detail3 !== null && (
                  <p
                    style={{ fontSize: "21px", color: "rbga(0,0,0,1)" }}
                    className="px-4 mx-3 poppins"
                  >
                    <span style={{ fontSize: "20px" }}>
                      {" "}
                      <BsDot />{" "}
                    </span>
                    {product.detail3}
                  </p>
                )}

                {product.detail4 !== null && (
                  <p
                    style={{ fontSize: "21px", color: "rbga(0,0,0,0.7)" }}
                    className="px-4 mx-3 poppins"
                  >
                    <span style={{ fontSize: "20px" }}>
                      {" "}
                      <BsDot />{" "}
                    </span>
                    {product.detail4}
                  </p>
                )}

                <h4 className="lora px-5 py-1" style={{ fontWeight: "300" }}>
                  <span className="badge bg-success">Benefits</span>
                </h4>

                {product.benefits1 && (
                  <p
                    style={{ fontSize: "21px", color: "rbga(0,0,0,0.7)" }}
                    className="px-4 mx-3 poppins"
                  >
                    <span style={{ fontSize: "20px" }}>
                      {" "}
                      <BsDot />{" "}
                    </span>
                    {product.benefits1}
                  </p>
                )}

                {product.benefits2 && (
                  <p
                    style={{ fontSize: "21px", color: "rbga(0,0,0,0.7)" }}
                    className="px-4 mx-3 poppins"
                  >
                    <span style={{ fontSize: "20px" }}>
                      {" "}
                      <BsDot />{" "}
                    </span>
                    {product.benefits2}
                  </p>
                )}

                {product.benefits3 && (
                  <p
                    style={{ fontSize: "21px", color: "rbga(0,0,0,0.7)" }}
                    className="px-4 mx-3 poppins"
                  >
                    <span style={{ fontSize: "20px" }}>
                      {" "}
                      <BsDot />{" "}
                    </span>
                    {product.benefits3}
                  </p>
                )}

                {product.benefits4 && (
                  <p
                    style={{ fontSize: "21px", color: "rbga(0,0,0,0.7)" }}
                    className="px-4 mx-3 poppins"
                  >
                    <span style={{ fontSize: "20px" }}>
                      {" "}
                      <BsDot />{" "}
                    </span>
                    {product.benefits4}
                  </p>
                )}
              </div>
            </Row>

            {product.reviews.length !== 0 && (
              <>
                <div>
                  <h2 className="sigmar-One" style={{ fontWeight: "200" }}>
                    Reviews
                  </h2>
                  <p className="roboto" style={{ textAlign: "right" }}>
                    <Link
                      className="my-2"
                      to={`/product/reviews/${product._id}/apnqwyuhoa236547891odfhsddshfdf`}
                    >
                      View all {product.reviews.length} reviews
                    </Link>
                  </p>
                </div>
                <div
                  id="ele"
                  style={{ color: "white" }}
                  className={"horizontal-scroll-wrapper-a squares my-3"}
                >
                  {productReviews.map((review) => (
                    <div
                      style={{
                        minWidth: "250px",
                        maxWidth: "300px",
                        backgroundColor: "#333",
                        padding: "20px",
                      }}
                      key={review._id}
                      className=" mx-4 svg__product__img"
                    >
                      <p className="qahiri" style={{ fontSize: "18px" }}>
                        {review.name} | {TimeHandler(review.createdAt)}
                      </p>

                      <span className="py-1">
                        <Rating value={review.rating} color="#f8e825" />
                      </span>

                      <p className="py-2 coustard">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Recomeded product  */}

            {listproductloading ? (
              <Loading />
            ) : listproducterror ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <>
                <h2 className="sigmar-One" style={{ fontWeight: "300" }}>
                  Prise Saving Combos
                </h2>

                <div
                  id="ele"
                  style={{ color: "white" }}
                  className={"horizontal-scroll-wrapper-a squares my-3"}
                >
                  {products.map((product) => (
                    <span key={product._id}>
                      {product._id === parseInt(match.params.id) ? (
                        <> </>
                      ) : (
                        <div
                          style={{
                            minWidth: "300px",
                            maxWidth: "300px",
                            minHeight: "350px",
                            padding: "15px",
                          }}
                          className=" mx-4 svg__product__img"
                        >
                          <Products product={product} />
                        </div>
                      )}
                    </span>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </Container>
      {/* about us */}
      {!loading && <AboutUs />}
    </>
  );
}

export default ProductProfile;

/*


 <div
id="ele"
style={{ color: "white" }}
className={"horizontal-scroll-wrapper-a squares my-3"}
>
              {products.map((product) => (
                 <div
                 style={{
                   minWidth: "250px",
                   maxWidth:'300px',
                   backgroundColor: "#333",
                   padding: "20px",
                 }}
                 key={product._id}
                 className=" mx-4 svg__product__img"
               >

                  <Products product={product} />
                </div>

              )}


            </div>



*/
