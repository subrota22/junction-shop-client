import { combineReducers } from "redux";
import { getAllProductsReducer, getSingleProductReducer, 
    productsReducer, selectedProductsReducer } from "./productReducer";

 export const reducers = combineReducers({
 allProducts: productsReducer,
 product: selectedProductsReducer, 
 getProducts:getAllProductsReducer,
 getSingleProduct:getSingleProductReducer
})



