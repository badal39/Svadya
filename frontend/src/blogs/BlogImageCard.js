import React, { useState, useEffect } from "react";





import { Row, Col } from "react-bootstrap";


import { AiTwotoneHeart,AiOutlineHeart } from "react-icons/ai";



function BlogImageCard(props) {

    const [showmore, setShowMore] = useState(false);

    return (
        <div>
            
              <div
                onClick={(e) => {showmore===false ? setShowMore(true) : setShowMore(false)}}
                style={{ position: "relative" }}
              >


               

                <img
                  style={{ height: "70vh", width: "100%" }}
                  src={props.image}
                />


               <span className="badge rounded-pill bg-danger" style={{position:'absolute',top: "3%",color: "white",left: "5%",
              }}>Comming Soon</span>


                 <p
                      className="sigmar-One"
                      style={{
                        position: "absolute",
                        top: "10%",
                        fontSize: "20px",
                        color: "white",
                        left: "5%",
                      }}
                    >
                      {props.title}
                    </p>
{/*  ---------------------------------------------------------------------- */ }

{/*
exicited or not exiceted


  <button  style={{height:'50px',width:'40%',position: "absolute",
                        bottom:'5px',left:'1%',borderRadius:'0px'}}
                        type="button" className=" btn btn-success">Excited</button>

                  

<button  style={{height:'50px',width:'40%',position: "absolute",
                        bottom:'5px',right:'1%',borderRadius:'0px'}}
                        type="button" className="btn btn-info">Not Excited</button>


*/}
          
                
              
              </div>
        </div>
    )
}

export default BlogImageCard
