import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../actions/productAction";
import React, { useState } from "react";
import { RingLoader } from "react-spinners";
import { Helmet } from "react-helmet";
const ProductListing = () => {
   const dispatch = useDispatch();
  const [loading , setLoading] = useState(true) ;
 React.useEffect(() => {
   axios.get('https://fakestoreapi.com/products')
    .then(res => {
        dispatch(setProducts(res?.data)) ;
        setLoading(false);
    })
    .catch((error) => console.log("Error", error))
 }, [dispatch]);

 if(loading) {
    return <div style={{margin:"10% 50%"}}>
    <RingLoader color="#36d7b7" />
    </div>
 }
    return (
        <>
      <Helmet><title>Products </title></Helmet>
      <br /> <br /> <br />
            <ProductComponent></ProductComponent>
        </>
    );
};

export default ProductListing;