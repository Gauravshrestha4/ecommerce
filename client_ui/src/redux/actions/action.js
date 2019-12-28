import ActionTypes from './actionTypes';

export const getAllProducts = (products) => {
    return ({
        type: ActionTypes.GET_ALL_PRODUCTS,
        payload: products 
    })
}

