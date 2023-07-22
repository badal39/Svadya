import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";


//import Paginate from '../components/Paginate'

import { listProducts,deleteProduct,createProduct } from "../actions/productActions";

import { PRODUCT_CREATE_RESET } from '../constants/productConstants'


function ProductListPage({ history, match }) {

  const tag = 'all';

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, pages, page } = productList;

  const productDelete = useSelector(state => state.productDelete)
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete

  const productCreate = useSelector(state => state.productCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, product: createdProduct } = productCreate



  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET })

    if (!userInfo.isAdmin) {
        history.push('/login')
    }

    if (successCreate) {
        history.push(`/admin/product/${createdProduct._id}/edit`)
    } else {
        dispatch(listProducts(tag))
    }

}, [dispatch, history, userInfo, successDelete, successCreate, createdProduct])

  const createProductHandler = () => {

    dispatch(createProduct())
  }

const deleteHandler = (id) => {
 
 if (window.confirm('Are you sure you want to delete this user?')) {
    dispatch(deleteProduct(id)) }
}


  return (
    <Container>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='text-right'>
                    <Button className='my-3' onClick={createProductHandler}>
                        Create Product
                    </Button>
                </Col>
      </Row>

      {loading ? (
        <h4>loading</h4>
      ) : error ? (
        <h5>{error}</h5>
      ) : (
        <div>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th><Row className="justify-content-center">ID</Row></th>
                <th><Row className="justify-content-center">NAME</Row></th>
                <th><Row className="justify-content-center">PRICE</Row></th>
                <th><Row className="justify-content-center">CATEGORY</Row></th>
                <th><Row className="justify-content-center">BRAND</Row></th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>Rs. {product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>

                  <td>
                    

                    <Row className="justify-content-center">
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                    <Button
                        className=' mx-1'
                        variant="light"
                        size="sm"
                      >
                      <img src="https://img.icons8.com/cute-clipart/18/26e07f/edit.png"/>                      </Button>            
                      </LinkContainer>
                      <Button
                        variant="light"
                        size="sm"
                        onClick={() => deleteHandler(product._id)}
                      >
                        <img src="https://img.icons8.com/fluent/18/26e07f/delete-trash.png" />
                      </Button>
                    </Row>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* <Paginate pages={pages} page={page} isAdmin={true} /> */}
        </div>
      )}
    </Container>
  );
}

export default ProductListPage;
