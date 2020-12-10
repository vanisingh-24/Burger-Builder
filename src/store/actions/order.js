//For action creators
import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

//synchronous
export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};

//Asynchronous
export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
           .then(response => {
               dispatch(purchaseBurgerSuccess(response.data.name, orderData));
           })
           .catch(error => {
            dispatch(purchaseBurgerFail(error));
        });
    };
};

