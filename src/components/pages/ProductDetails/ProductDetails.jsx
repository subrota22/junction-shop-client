import axios from 'axios';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../../redux/actions/productAction';
import { RingLoader } from 'react-spinners';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductDetails = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const product = useSelector((state) => state.reducers.getSingleProduct.product);

 React.useEffect(() => {
    axios.get(`http://localhost:3021/get-product/${id}`)
    .then(res => {
        dispatch(getSingleProduct(res.data));
        setLoading(false);
    })
    .catch(error => console.error(error));
 }, [dispatch, id]);
    //
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
                <Row className="justify-content-md-center my-5">

                    {<Col xs="12" md="6" lg="3" key={product?._id}>
                        <Card style={{ width: '100%', height: "auto", margin: "18px" }} className="product">
                            <Card.Img variant="top" src={product?.productImage} style={{ height: "200px" }} />
                            <hr />
                            <Card.Body>
                                <Card.Title className="text-uppercase">{product?.category}</Card.Title>
                                <Card.Text>
                                    ${product?.rating}
                                </Card.Text>
                                <Card.Text>
                                    ${product?.price}
                                </Card.Text>
                                <Card.Text>
                                    ${product?.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    }


                </Row>

            </Container>
            <br /> <br /> <br /> <br />
        </>
    );
};

export default ProductDetails;