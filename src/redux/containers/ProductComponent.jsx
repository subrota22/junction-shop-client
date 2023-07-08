import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
const ProductComponent = () => {
    const products = useSelector((state) => state);
    const productData = products?.reducers?.allProducts?.products;
    return (
        <>

   <Container>
      <Row  className ="justify-content-md-center my-5">
    
        {
                    productData?.map(item =>

                        <Col xs="12" md="6"  lg="3" key={item?.id}>
                            <Card style={{ width: '100%', height:"auto", margin:"18px" }} className="product">
                                <Card.Img variant="top" src={item?.image} style={{height:"200px"}}/>
                               <hr />
                                <Card.Body>
                                    <Card.Title className="text-uppercase">{item?.category}</Card.Title>
                                    <Card.Text>
                                      ${item?.price}
                                    </Card.Text>
                                 <Link to={`/product/${item?.id}`}>  <Button variant="primary" className="button"> Show more <i className="fa-solid fa-arrow-right mx-2"></i> </Button></Link>
                                </Card.Body>
                            </Card>
                            </Col>

                    )
                }


      </Row>
   
    </Container>
            
        </>
    );
};

export default ProductComponent;