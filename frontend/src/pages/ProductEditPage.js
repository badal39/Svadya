import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails, updateProduct } from "../actions/productActions";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";

import {

  API_PREFIX

} from "../constants/apiPrifixConstant"

function ProductEditPage({ match, history }) {
  const productId = match.params.id;

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const [detail0, setDetail0] = useState("");
  const [detail1, setDetail1] = useState("");
  const [detail2, setDetail2] = useState("");
  const [detail3, setDetail3] = useState("");
  const [detail4, setDetail4] = useState("");

  const [benefits1, setBenefits1] = useState("");
  const [benefits2, setBenefits2] = useState("");
  const [benefits3, setBenefits3] = useState("");
  const [benefits4, setBenefits4] = useState("");

  const [producttag, setProductTag] = useState(1);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;

   const productUpdate = useSelector(state => state.productUpdate)
   const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = productUpdate

  useEffect(() => {
   
    if (successUpdate) {
        dispatch({ type: PRODUCT_UPDATE_RESET })
        history.push('/admin/productlist')
    } 
    
    else {


    if (!product.name || product._id !== Number(productId)) {
            dispatch(listProductDetails(productId))
        } else {
            setName(product.name)
            setPrice(product.price)
            setImage(product.image)
     
            setCountInStock(product.countInStock)
            setDescription(product.description)
            setProductTag(product.tag)
            setDetail0(product.detail0)
            setDetail1(product.detail1)
            setDetail2(product.detail2)
            setDetail3(product.detail3)
            setDetail4(product.detail4)

            setBenefits1(product.benefits1)
            setBenefits2(product.benefits2)
            setBenefits3(product.benefits3)
            setBenefits4(product.benefits4)



        }
    }


  }, [dispatch, product, productId, history,successUpdate])


  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        tag:producttag,
        name,
        price,
        image,
        countInStock,
        description,
        detail0,
        detail1,
        detail2,
        detail3,
        detail4,
        benefits1,
        benefits2,
        benefits3,
        benefits4

      })
    );
  };



  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()

    formData.append('image', file)
    formData.append('product_id', productId)

    setUploading(true)

    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const { data } = await axios.post(API_PREFIX+'api/product/img/upload/', formData, config)


        setImage(data)
        setUploading(false)

    } catch (error) {
        setUploading(false)
    }
}

  return (
    <div>
      <Link to="/admin/productlist">Go Back</Link>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            {" "}
            <h1>Edit Product</h1>
            {loading ? (
              <h3> loading </h3>
            ) : error ? (
              <>{error}</>
            ) : (
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="name">
                  <Form.Label>Product Tag  
                    <p className="py-0 my-0">
                    honey : 1  
                    </p>
                    <p className="py-0 my-0">
                    ghee : 2
                    </p>
                    <p className="py-0 my-0">
                    combo : 3 
                    </p>
                     </Form.Label>
                  <Form.Control
                    type="int"
                    placeholder="Enter Id"
                    value={producttag}
                    onChange={(e) => setProductTag(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="price">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="image">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  ></Form.Control>

                  <Form.File
                    id="image-file"
                    label="Choose File"
                    custom
                    onChange={uploadFileHandler}
                  ></Form.File>
                  {uploading && <> Loading </>}
                </Form.Group>

                <Form.Group controlId="countinstock">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter stock"
                    value={countInStock}
                    onChange={(e) => setCountInStock(e.target.value)}
                  ></Form.Control>
                </Form.Group>

              
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></Form.Control>
                </Form.Group>


                <Form.Group controlId="pDetail1">
                  <Form.Label>Detail 1</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Detail"
                    value={detail0}
                    onChange={(e) => setDetail0(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="pDetail1">
                  <Form.Label>Detail 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Detail"
                    value={detail1}
                    onChange={(e) => setDetail1(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="pDetail1">
                  <Form.Label>Detail 3</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Detail"
                    value={detail2}
                    onChange={(e) => setDetail2(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="pDetail1">
                  <Form.Label>Detail 4</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Detail"
                    value={detail3}
                    onChange={(e) => setDetail3(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="pDetail1">
                  <Form.Label>Detail 5</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Detail"
                    value={detail4}
                    onChange={(e) => setDetail4(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                

                

              
                {/* Benifits  */}
                <Form.Group controlId="description">
                  <Form.Label>Benefits 1</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter benefits 1"
                    value={benefits1}
                    onChange={(e) => setBenefits1(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="benefits">
                  <Form.Label>Benefits 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter benefits 2"
                    value={benefits2}
                    onChange={(e) => setBenefits2(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="benefits">
                  <Form.Label>Benefits 3</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter benefits 3"
                    value={benefits3}
                    onChange={(e) => setBenefits3(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="benefits">
                  <Form.Label>Benefits 4</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter benefits 4"
                    value={benefits4}
                    onChange={(e) => setBenefits4(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button type="submit" variant="primary">
                  Update
                </Button>
              </Form>
            )}
          </Col>
        </Row>
      </Container>{" "}
    </div>
  );
}

export default ProductEditPage;
