// Component import
import Header from "./components/Header";




// Pages import
import ProductPage from "./products/ProductPage";
import ProductProfile from "./products/ProductProfile";
import CartPage from "./pages/CartPage";

import Homepage from "./home/HomePage"

// brands

import BrandSvadhyaHoney from './brands/BrandSvadhyaHoney'
import BrandSvadhyaGhee from './brands/BrandSvadhyaGhee'
import About from './brands/About'


import FarmPage from "./pages/FarmPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserProfilePage from "./pages/UserProfilePage";
import ShippingPage from "./pages/ShippingPage";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderDetails from "./pages/OrderDetails";
import AllOrderPage from "./pages/AllOrderPage";
import UserListPage from "./pages/UserListPage"
import ProductListPage from "./pages/ProductListPage"
import ProductEditPage from './pages/ProductEditPage';
import  OrderListPage from './pages/OrderListPage';
import AllReviewsPage from './pages/AllReviewsPage';

// Blogs
import BlogsImage from './blogs/BlogsImage'



import AdminOrderDetail from './AdminPages/AdminOrderDetail';
import AdminOrderMonthFilter from './AdminPages/AdminOrderMonthFilter';


import AboutUs from './components/AboutUs'

// module import
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row,Carousel,Col } from "react-bootstrap";


import PrivacyPolicy from './pages/PrivacyPolicy'
import TermofUse from './pages/TermofUse'
import RefundPolicy from './pages/RefundPolicy'
import ShippingPolicy from './pages/ShippingPolicy'


function App({location}) {

  localStorage.setItem('setimg', 0);
  localStorage.setItem('setvid', 1);

  return (
    <>
    <Router>
       
      <Header /> 


    
     {/*    Blogs Route -- */}  

     <Route path="/coming-soon" component={BlogsImage} exact />


          {/* --- end --- */}  


        
      
 

  

        <Route path="/farm" component={FarmPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegisterPage} exact />

        <Route path="/profile" component={UserProfilePage} exact />
        <Route path="/order" component={AllOrderPage} exact />
        <Route path="/order/:id" component={OrderDetails} exact />




        
        {/*   Brands  */}

       <Route path="/brands/svadya-honey" component={BrandSvadhyaHoney} exact />
       <Route path="/about-us" component={About} exact />

       <Route path="/brands/svadya-ghee" component={BrandSvadhyaGhee} exact />


        <Route path="/shipping" component={ShippingPage} exact />
     {/*    <Route path="/payment" component={PaymentPage} exact />  */}  
        <Route path="/placeorder" component={PlaceOrderPage} exact />
        
        <Route path="/admin/userlist" component={UserListPage} exact />
        <Route path="/admin/productlist" component={ProductListPage} exact />
       <Route path='/admin/product/:id/edit' component={ProductEditPage} />
       <Route path="/admin/orderlist" component={OrderListPage} exact />
       <Route path="/admin/orders-per-month" component={AdminOrderMonthFilter} exact />

       <Route path="/admin/order/:id" component={AdminOrderDetail} exact />

       <Route path="/products/" component={ProductPage} exact />

      
        <Route path="/privacy-policy/" component={PrivacyPolicy} exact />
        <Route path="/term-of-use/" component={TermofUse} exact />
        <Route path="/refund-policy/" component={RefundPolicy} exact />
        <Route path="/shipping-policy/" component={ShippingPolicy} exact />

        <Route path="/" component={Homepage} exact />

        <Route path="/product/:id" component={ProductProfile} exact />
        <Route path="/product/reviews/:id/:at" component={AllReviewsPage} exact />

        
        <Route path="/cart/:id?" component={CartPage} />


    </Router>

    </>
  );
}

export default App;

/*
 <Container>
    <Row className="justify-content-center  fixed-bottom my-3" >
      <h6 > © 2021 www.Farm.com. All rights reserved.
      </h6>

      </Row>
      </Container>

*/
