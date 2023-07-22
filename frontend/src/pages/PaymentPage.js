import React, { useState, useEffect } from "react";


import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { createOrder } from "../actions/orderActions";

import { ORDER_CREATE_RESET } from "../constants/orderConstants";

import axios from 'axios'




import {

    API_PREFIX
  
  } from "../constants/apiPrifixConstant"
  











function PaymentPage() {

 
    const [payButton,setPayButton] = useState(false)

   


    const cart = useSelector((state) => state.cart);
    const { cartItems, shippingAddress } = cart;

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch();
   

    const name=cart.shippingAddress.firstname + " " + cart.shippingAddress.lastname
    const email = cart.shippingAddress.email
    const number = cart.shippingAddress.phoneNum


    const PlaceOrder = () => {
        dispatch(
          createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: "razorpay",
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice,
            discount : cart.Discount
    
          })
        );
      };



    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {



    
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("failed to load. Are you online?");
            return;
        }
       // const result = await axios.post("http://localhost:8000/api/order/razorpay/create/");
       const data0 = {
       userID:userInfo._id,
       amount:cart.totalPrice,
       name:name,
       email: email,
       contact: number,



    };
        const result = await axios.post(API_PREFIX+"api/order/razorpay/create/",data0);
        

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        const { amount, id: order_id, currency } = result.data;
        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY_ID , // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Svadya",
            description: "Pay to Svadya",
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    amount: amount.toString(),

                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

              //  const result = await axios.post("http://localhost:8000/api/order/razorpay/success/", data);
                const result = await axios.post(API_PREFIX+"api/order/razorpay/success/", data);
                if(result.data.msg=="success"){
                    setPayButton(true)
                    PlaceOrder()
                }
                // alert(result.data.msg);
            },
            prefill: {
                name:name,
                email: email,
                contact: number,
            },
            notes: {
                address: "204 strret ahead ",
            },
            theme: {
                color:"black",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }



   
  return (
      <Button variant="info" 
      onClick={displayRazorpay}
      disabled={payButton}
      style={{borderRadius:'2px 2px 2px 2px'}} className="btn btn-block btn-info" >
        Pay & Placeorder
      </Button>
  );
}

export default PaymentPage;
