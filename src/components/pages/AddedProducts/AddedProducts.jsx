import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/actions/productAction';
import { RingLoader } from 'react-spinners';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
const AddedProducts = () => {
const [loading, setLoading] = useState(true) ;
const dispatch = useDispatch() ; 
const products = useSelector((state) => state) ;

const allProducts = products.reducers?.getProducts?.products ;

useEffect(() => {
axios.get(`http://localhost:3021/get-products`)
.then(res => {
 dispatch(getProducts(res?.data?.data))
 setLoading(false) ;
})
.catch(error => console.error(error));
}, [dispatch]);

if (loading) {
    return <div style={{ margin: "10% 50%" }}>
        <RingLoader color="#36d7b7" />
    </div>
}
    return (
        <>
        <Helmet><title>Added products</title></Helmet>
       <br /> <br /> <br /> <br /> 
   <Container>
      <Row  className ="justify-content-md-center my-5">
    
        {
                    allProducts?.map(item =>

                        <Col xs="12" md="6"  lg="3" key={item?._id}>
                            <Card style={{ width: '100%', height:"auto", margin:"18px" }} className="product">
                                <Card.Img variant="top" src={item?.productImage} style={{height:"200px"}}/>
                               <hr />
                                <Card.Body>
                                    <Card.Title className="text-uppercase">{item?.category}</Card.Title>
                                    <Card.Text>
                                      ${item?.price}
                                    </Card.Text>
                                 <Link to={`/product-details/${item?._id}`}>  <Button variant="primary" className="button"> Show more <i className="fa-solid fa-arrow-right mx-2"></i> </Button></Link>
                                </Card.Body>
                            </Card>
                            </Col>

                    )
                }


      </Row>
   
    </Container>
    <br /> <br /> <br /> <br /> 
        </>
    );
};

export default AddedProducts;