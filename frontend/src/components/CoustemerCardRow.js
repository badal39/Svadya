import React, { useState, useEffect } from "react";

import i from '../static/images/1.jpg'

import { Row } from "react-bootstrap";

import Loading from "./Loading";

import { useDispatch, useSelector } from "react-redux";
import { listCoustemerCard } from "../actions/extraActions";

import "../css/coustemerCard.css";

function CoustemerCard() {
  const dispatch = useDispatch();
  const coustemerCardList = useSelector((state) => state.coustemerCardList);
  const { error, loading, cards } = coustemerCardList;

  useEffect(() => {
    dispatch(listCoustemerCard());
  }, [dispatch]);

  return (
    <div className="row ">
    <div className="row_cards">


    
   
    
  
  {cards.map((card) => (
                  <img key={card._id} src={card.image} className="row_card" />

      ))}
    
    </div>
  </div>
  );
}

export default CoustemerCard;


  {/*  
    
    
      <div className="row ">
      <div className="row_cards">


      
     
      
    
    {cards.map((card) => (
                    <img key={card._id} src={card.image} className="row_card" />

        ))}
      
      </div>
    </div>
      
      */}