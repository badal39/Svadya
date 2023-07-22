// Module import
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useMediaQuery } from "react-responsive";

import { FiShoppingCart } from "react-icons/fi";

import { Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../css/header.css";

import { logout } from "../actions/userActions";

function Header() {
  const [logonum, setLogoNum] = useState(10);
  const LogoHandler = (i) => {
    return (
      <img
        className="my-1"
        src={"/logo_img/1.svg"}
        style={{ width: "150px", height: "40px" }}
      />
    );
  };

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Navbar
      style={{ backgroundColor: "rgba(0,0,0,0.9) " }}
      sticky="top"
      variant="dark"
      expand="lg"
      collapseOnSelect
    >
      <Container  >
        <Navbar.Toggle
          className="my-1 px-0 mx-0 "
          aria-controls="basic-navbar-nav "
          style={{border: "transparent" }}
        ></Navbar.Toggle>
        <LinkContainer to="/">
          <Navbar.Brand className="poppins header__logo"><span>SVADYA</span></Navbar.Brand>
        </LinkContainer>

        {isMobile && (
          <LinkContainer to="/cart">
            <i>
              <FiShoppingCart style={{ fontSize: "25px" }} />
            </i>
          </LinkContainer>
        )}

        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav  className="coustard ml-auto">
            <LinkContainer
              className={
                isMobile ? "margin__top" : " "
              }
              style={{ textAlign: "center" }}
              to="/products/"
            >
              <Nav.Link>Products</Nav.Link>
            </LinkContainer>

            <NavDropdown
               className={
                isMobile ? "margin__top" : " "
              }
              style={{ textAlign: "center" }}
              title="Brands"
              id="brand"
            >
              <LinkContainer to="/brands/svadya-honey">
                <NavDropdown.Item>Svadya Honey</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/brands/svadya-ghee">
                <NavDropdown.Item>Svadya Cow Ghee</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer
               className={
                isMobile ? "margin__top" : " "
              }
              style={{ textAlign: "center" }}
              to="/coming-soon"
            >
              <Nav.Link>Coming Soon</Nav.Link>
            </LinkContainer>
            {/*
         <LinkContainer className={isMobile ? '' : 'navbar__item__center item__4 px-0 mx-0' } style={{textAlign:'center'}} to="/AboutUs/">
                <Nav.Link>
                  Combos
                </Nav.Link>
              </LinkContainer>
              <LinkContainer className={isMobile ? '' : 'navbar__item__center item__5 px-0 mx-0' } style={{textAlign:'center'}} to="/AboutUs/">
                <Nav.Link>
                  Combos
                </Nav.Link>
              </LinkContainer>
         
         */}

            {isMobile && userInfo.IsuserLogin && (
              <LinkContainer style={{ textAlign: "center" }} to="/order">
                <Nav.Link>My Orders</Nav.Link>
              </LinkContainer>
            )}

            {userInfo.IsuserLogin ? (
              <>
                <NavDropdown
                  style={{ textAlign: "center" }}
                  title={<strong>{userInfo.name}</strong>}
                  id="username"
                >
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  {!isMobile && (
                    <LinkContainer to="/order">
                      <NavDropdown.Item>My Orders</NavDropdown.Item>
                    </LinkContainer>
                  )}

                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <LinkContainer style={{ textAlign: "center" }} to="/login">
                <Nav.Link>
                  <strong>
                    <i className="fas fa-user"></i>Login
                  </strong>
                </Nav.Link>
              </LinkContainer>
            )}

            {!isMobile && (
              <LinkContainer style={{ textAlign: "center" }} to="/cart">
                <Nav.Link>
                  <FiShoppingCart style={{ fontSize: "20px" }} />
                </Nav.Link>
              </LinkContainer>
            )}

            {userInfo && userInfo.isAdmin && (
              <NavDropdown
                style={{ textAlign: "center" }}
                title="Admin"
                id="adminmenue"
              >
                <LinkContainer to="/admin/userlist">
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/admin/productlist">
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/admin/orderlist">
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
