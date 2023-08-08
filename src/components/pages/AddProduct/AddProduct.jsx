import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { postFailure, postRequest, postSuccess } from '../../../redux/actions/productsStoreAction';
import "./AddProduct.css" ;
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const [data, setData] = useState({});
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dispatch the action to post data
        dispatch(postRequest("request"));
        return  fetch('https://junction-shop-subrota.vercel.app/post-product', {
               method: 'POST',
               headers: {
                 'Content-Type': 'application/json'
               },
               body: JSON.stringify({...data, date: new Date()})
             })
             .then(res => res.json())
               .then((data) => {
               if(data.data){
                   toast.success("Congrasulation your product data added successfully !!");
                   dispatch(postSuccess("success"));
                   e.target.reset();
               }
               })
               .catch((error) => {
              console.log("error", error);
             dispatch(postFailure(error));
         });
    }

    const handleInputFeild = (e) => {
        const value = e.target.value;
        const key = e.target.name;
        let newData = { ...data };
        newData[key] = value;
        setData(newData);
    }
    //file
    const fileKey = process.env.REACT_APP_IMAGEBB_KEY;

    const handleInputFile = (e) => {
        const fileInfo = e.target.files;
        let fileData = new FormData();
        fileData.append("image", fileInfo[0]);
        fetch(`https://api.imgbb.com/1/upload?key=${fileKey}`, {
            method: "POST",
            body: fileData,
        })
            .then(res => res.json())
            .then(item => {
                let newData = { ...data };
                newData["productImage"] = item.data.display_url;
                setData(newData);
            })
            .catch(error => console.log("error", error))
    }
    return (
        <>
        <Helmet><title>Add product</title></Helmet>
            <br /> <br /><br /> <br /> <br />
            <Container className='d-flex formDiv'>
                <Form onSubmit={handleSubmit} className='addProduct  p-4  text-white was-validated'>
                    <Form.Group className="mb-3" controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" name="category" onChange={(e) => handleInputFeild(e)} placeholder="Enter product category" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="number" name="rating" onChange={(e) => handleInputFeild(e)} placeholder="Enter rating" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" name="price" onChange={(e) => handleInputFeild(e)} placeholder="Enter product price" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Product Image">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control type="file" onChange={(e) => handleInputFile(e)} name='productImage' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Product description</Form.Label>
                        <Form.Control as="textarea" rows={5} name='description' onChange={(e) => handleInputFeild(e)} required />
                    </Form.Group>
                    <Button type='submit' variant='primary' className='w-100'>Add product</Button>
                </Form>
                <div className='addProductTitle'> Add new product </div>
            </Container>
            <br />    <br />  <br />
        </>
    );
};

export default AddProduct;