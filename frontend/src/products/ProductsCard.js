import React from "react";
import { Col, Row } from "react-bootstrap";

import {Link} from 'react-router-dom'



import "./css/ProductsCard.css";

function Exp(props) {


  return (


<div className={"product__card bk__"+props.name.toLowerCase()} >
        
          <img className="imgBx" src={props.image} />
       
        <div className="contentBx py-3">
              <h3 className="py-0 my-0">{props.name}</h3>
               <div className="product__description py-2">
                    
                 {props.des} 


                            
                    
      </div>
    
        </div>
     
        <Row className="justify-content-center ">
        <Link to={`/product/${props.id}`} className="product__text" >

        <button
              
              type="button"
              className="btn btn-outline-success homepage__shopnow_button"
            >
              Shop Now
            </button>
            </Link>

            </Row>
        
      </div>
      

    
     

  );
}

export default Exp;
