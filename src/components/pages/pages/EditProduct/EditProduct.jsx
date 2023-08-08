import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import "./EditProduct.css";
import { Helmet } from 'react-helmet';
import { postFailure, postRequest, postSuccess } from '../../../../redux/actions/productsStoreAction';
import axios from 'axios';
import {  useParams } from 'react-router-dom';
import { getSingleProduct } from '../../../../redux/actions/productAction';
import { RingLoader } from 'react-spinners';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
const EditProduct = () => {
    const productInfo = useSelector((state) => state);
    var getProduct = productInfo?.reducers?.getSingleProduct?.product;
    const [data, setData] = useState({});
     const [loading, setLoading] = useState(true) ;
    const dispatch = useDispatch();
    const { id } = useParams();
    //fetch data
    const {refetch} = useQuery({
        queryKey:[id, dispatch, setLoading, setData],
        queryFn: () => axios.get(`https://junction-shop-subrota.vercel.app/get-product/${id}`)
        .then(res => {
            setData(res?.data);
            dispatch(getSingleProduct(res?.data));
            setLoading(false) ;
        })
        .catch(error => console.log(error))
    
     })
      
     //edit data
const handleSubmit = (e) => {
e.preventDefault();
    dispatch(postRequest("request"));
    return  fetch('https://junction-shop-subrota.vercel.app/updateProduct/'+id, {
           method: 'PUT',
           headers: {
             'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
         })
         .then(res => res.json())
           .then((data) => {
           if(data){
               Swal.fire( {
                icon:"success",
                title:"Congrasulation !!", 
                text:"The product category one" + getProduct?.category  + " updated successfully !!",
                timer:6000,
               });
               dispatch(postSuccess("success"));
               refetch() ;
               e.target.reset() ;
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
        const fileInfo = e?.target?.files;
        let fileData = new FormData();
        fileData.append("image", fileInfo[0]);
        fetch(`https://api.imgbb.com/1/upload?key=${fileKey}`, {
            method: "POST",
            body: fileData,
        })
            .then(res => res.json())
            .then(item => {
                let newData = { ...data };
                newData["productImage"] = item?.data?.display_url;
                setData(newData);
            })
            .catch(error => console.log("error", error))
    }



//delete data

    if (loading) {
        return <div style={{ margin: "20% 50%" }}>
            <RingLoader color="#36d7b7" />
        </div>
    }

    return (
        <>
            <Helmet><title>Edit product</title></Helmet>
            <br /> <br /><br /> <br /> <br />
            <Container className='d-flex formDiv'>
                
                <Form onSubmit={handleSubmit} className='addProduct  p-4  text-white was-validated'>
                <div className="mx-auto">
                <img src={getProduct?.productImage}  alt="product" style={{height:"320px", width:"100%", margin:"16px auto", borderRadius:"25px", boxShadow:"0 4px 0 4px rgba(0, 255, 0, 0.8)"}} />
                </div>
                    <Form.Group className="mb-3" controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" name="category" defaultValue={getProduct?.category} onChange={(e) => handleInputFeild(e)} placeholder="Enter product category" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="number" name="rating" defaultValue={getProduct?.rating} onChange={(e) => handleInputFeild(e)} placeholder="Enter rating" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" name="price" defaultValue={getProduct?.price} onChange={(e) => handleInputFeild(e)} placeholder="Enter product price" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Product Image">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control type="file" onChange={(e) => handleInputFile(e)} name='productImage' />
                    
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Product description</Form.Label>
                        <Form.Control as="textarea" rows={5} name='description' defaultValue={getProduct?.description} onChange={(e) => handleInputFeild(e)} required />
                    </Form.Group>
                    <Button type='submit' variant='primary' className='w-100'>Edit product</Button>
                </Form>
                <div className='addProductTitle'> Edit product </div>
            </Container>
            <br />    <br />  <br />
        </>
    );
};

export default EditProduct;