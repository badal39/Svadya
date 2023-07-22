// Module import
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Form,
} from "react-bootstrap";
//import axios from 'axios';

import Loading from "../components/Loading";

import Message from '../components/Message'

import { useDispatch, useSelector } from "react-redux";
import {
  listProductDetails,
  createProductReview,
} from "../actions/productActions";


// Componets import
import { TimeHandler } from "../components/TimeHandler";
import Rating from "../components/Rating";

function AllReviewsPage({ match, history, location }) {
  const [key, setKey] = useState(0);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingProductReview,
    error: errorProductReview,
    success: successProductReview,
  } = productReviewCreate;
  
  const s_key = location.pathname.split("/")[4];
  if(s_key[2] + s_key[8] + s_key[19] =="yss" && key != 1 ){

    setKey(1)

}
  if(s_key[2] + s_key[8] + s_key[19] =="noo" && key != 0 ){

    setKey(0)

}
  
 

  useEffect(() => {

   

    
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match,location]);

  const submitHandler = (e) => {

    e.preventDefault();
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    );
  };

  return (
    <>
 {loading ? <Loading/>

            
: error ? <Message variant='danger'>{error}</Message>

:

    <Col>
      

      <Row className="justify-content-center my-2 py-1">
        {" "}
        <h4 className="roboto">Reviews</h4>
      </Row>

      {key===1 ? ( <Row className="my-3" style={{color:'white',maxHeight:'25rem',overflowY:'auto'}} >
        {product.reviews.map((review) => (
         <Col key={review._id} className="my-3" md={4}  sm={5} lg={3}>
         <div
         style={{
           minWidth: "250px",
           maxWidth:'300px',
           backgroundColor: "#333",
           padding: "20px",
         }}
         
         className=" mx-4 svg__product__img"
       >
         <p className="qahiri" style={{ fontSize: "18px" }}>
           {review.name} | {TimeHandler(review.createdAt)}
         </p>

         <p>
           {" "}
           <Rating value={review.rating} color="#f8e825" />
         </p>

         <p className="py-2 coustard">{review.comment}</p>
       </div>
   </Col>
        ))}
      </Row>) : ( <Row className="my-3" style={{color:'white'}}>
        {product.reviews.map((review) => (
          <Col   key={review._id}
          className="my-3" sm={5} lg={3} md={4}>
             <div
             style={{
               minWidth: "250px",
               maxWidth:'300px',
               backgroundColor: "#333",
               padding: "20px",
             }}
             className=" mx-4 svg__product__img"
           >
             <p className="qahiri" style={{ fontSize: "18px" }}>
               {review.name} | {TimeHandler(review.createdAt)}
             </p>

             <p>
               {" "}
               <Rating value={review.rating} color="#f8e825" />
             </p>

             <p className="py-2 coustard">{review.comment}</p>
           </div>
       </Col>
       
       ))}
      </Row>)}

     
      {    key===1 &&
      <>

      <h4>Write a review</h4>
     
      {loadingProductReview && <Row style={{
                position: 'absolute', left: '50%',bottom:'20%',
                transform: 'translate(-50%, -50%)',
                display:'block'

            }}> <Loading/></Row>}
      {successProductReview && (
        <Message variant="success">Review Submitted</Message>
      )}
      {errorProductReview && (
        <Message variant="danger">{errorProductReview}</Message>
      )}

      {userInfo ? (
          
    
       
        <Form onSubmit={submitHandler}>
        <Form.Group controlId="rating">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </Form.Control>
        </Form.Group>
        

        <Form.Group controlId="comment">
          <Form.Label>Review</Form.Label>
          <Form.Control
            as="textarea"
            row="5"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button
          disabled={loadingProductReview}
          type="submit"
          variant="primary"
        >
          Submit
        </Button>
      </Form>
    
    


      ) : (
        <Message variant="info">
          Please <Link to="/login">login</Link> to write a review
        </Message>
      )}

</>


}

    
    
    </Col>
}
    </>
  );
}

export default AllReviewsPage;
