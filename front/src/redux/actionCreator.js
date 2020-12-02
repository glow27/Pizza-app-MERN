import {
  ADD_PIZZA,
  EDIT_CART,
  CHANGE_CURRENCY,
  CALCULATE_CURRENCY,
  DEL_PIZZA,
  MAKE_ORDER,
  LOGIN_USER,
  LOGOUT_USER
} from './actionTypes';

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

export const calculateCurrency = (value) => ({
  type: CALCULATE_CURRENCY,
  payload: value,
});

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const logoutUser = (user) => ({
  type: LOGOUT_USER,
  payload: user,
});
