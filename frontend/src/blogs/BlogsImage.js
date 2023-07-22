import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { vlogCards } from "../actions/blogActions";

import { TimeHandler } from "../components/TimeHandler";

import { Row, Col, Container, Carousel } from "react-bootstrap";


import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";

import { AiOutlineEye } from "react-icons/ai";
import Loading from "../components/Loading";

import BlogImageCard from './BlogImageCard'

import './css/blogs.css'

import {

  API_PREFIX

} from "../constants/apiPrifixConstant"



function BlogsImage() {
  const dispatch = useDispatch();
  const vlogCardList = useSelector((state) => state.vlogCard);
  const { error, loading, Vcards } = vlogCardList;
  const [showmore, setShowMore] = useState(false);
  const [like, setLike] = useState(false);

  useEffect(() => {
    dispatch(vlogCards());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Row className="px-0 mx-0">
          {Vcards.map((card) => (
         
          <Col className="py-3" md={4} key={card._id}>
             <BlogImageCard createdAt={TimeHandler(card.created_at)}
             image={card.image}
             likes={card.like}
             author={card.author}
             title={card.title}
             des={card.des}
             islike={card.isLike}
             
             />
             </Col>
         ))}
        </Row>
      )}
    </>
  );
}

export default BlogsImage;
