import { ActionTypes } from "../contents/action-type";
const initialState = {
products:[] , 
};
//
export const productsReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            
          return {...state, products:payload} ;
    
        default:
    return state ;
    }

} 

//
export const getAllProductsReducer = (state = initialState, {type, payload}) => {

  switch (type) {
      case ActionTypes.GET_ALL_PRODUCTS:
          
        return {...state, products:payload} ;
  
      default:
  return state ;
  }

} 

//
export const getSingleProductReducer = (state = {}, {type, payload}) => {

  switch (type) {
      case ActionTypes.GET_SINGLE_PRODUCT:
          
        return {...state, product:payload} ;
  
      default:
  return state ;
  }

} 

//
export const selectedProductsReducer = (state = {}, {type, payload}) => {

  switch (type) {
      case ActionTypes.SELECTED_PRODUCTS:
          
        return {...state, product:payload} ;

        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      
        return {};
        
      default:
  return state ;
  }

} 

