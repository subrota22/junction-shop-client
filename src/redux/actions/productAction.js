import { ActionTypes } from "../contents/action-type"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProducts = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: products,
    }
}
export const getProducts = (products) => {
    return {
        type: ActionTypes.GET_ALL_PRODUCTS,
        payload: products,
    }
}


export const getSingleProduct = (product) => {
    return {
        type: ActionTypes.GET_SINGLE_PRODUCT,
        payload: product,
    }
}


export const removeSelectedProducts = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS
    }
}

