import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { removeSelectedProducts, selectedProducts } from "../actions/productAction";
import { RingLoader } from "react-spinners";
import { Helmet } from "react-helmet";
const ProductDetails = () => {
    const productData = useSelector((state) => state);
    const { productId } = useParams();
    const product = productData.reducers.product.product;
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    React.useEffect(() => {
        //remove past selected product 

        dispatch(removeSelectedProducts());

        //get single product 
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res => {
                dispatch(selectedProducts(res?.data));
                setLoading(false);
            })
            .catch((error) => console.log("Error", error.message));

    }, [dispatch, productId]);

    if (loading) {
        return <div style={{ margin: "10% 50%" }}>
            <RingLoader color="#36d7b7" />
        </div>
    }


    return (
        <>
            <Helmet><title>Product Details</title></Helmet>
            <br /> <br /> <br /> <br />
            <Container>
                <Row className="justify-content-md-center">

                    {<Col xs="10" key={product?.id}>
                        <Card style={{ width: '90%', height: "auto", margin: "20px" }}>
                            <Card.Img variant="top" src={product?.image} style={{ height: "380px", padding: "20px" }} />
                            <hr />
                            <Card.Body>
                                <Card.Title className="text-uppercase cardTitle">{product?.category}</Card.Title>
                                <Card.Text className="price">
                                    ${product?.price}
                                </Card.Text>
                                <Card.Text className="fs-3 fw-bold" >
                                    {product?.title}
                                </Card.Text>
                                <Card.Text className="fs-5">
                                    {product?.description}
                                </Card.Text>
                                <Card.Text className=" fs-4">
                                    <i className="fa-solid fa-star mx-2 text-warning fs-4 mx-2" ></i>  {product?.rating?.rate}
                                </Card.Text>
                                <Card.Text className=" fs-4">
                                    <i className="fa-solid fa-person-running text-success fs-4 mx-2"></i>  {product?.rating?.count}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    }

                </Row>

            </Container>

        </>
    );
};

export default ProductDetails;