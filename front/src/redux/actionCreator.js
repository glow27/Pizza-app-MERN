import {ADD_PIZZA, EDIT_CART, CHANGE_CURRENCY, CART_CURRENCY, DEL_PIZZA, MAKE_ORDER} from './actionTypes';

export const addPizza = (pizza) => ({
  type: ADD_PIZZA,
  payload: pizza,
});

export const delPizza = (pizza) => ({
  type: DEL_PIZZA,
  payload: pizza,
});

export const editCart = (pizza) => ({
  type: EDIT_CART,
  payload: pizza,
});

export const changeCurrency = () => ({
  type: CHANGE_CURRENCY,
});

export const makeOrder = () => ({
  type: MAKE_ORDER,
});

export const cartCurrency = (value) => ({
  type: CART_CURRENCY,
  payload: value
});
