import { ADD_PIZZA, EDIT_CART, CART_CURRENCY, DEL_PIZZA } from './actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = [], action) {
  switch (action.type) {
    case ADD_PIZZA:
      const temp = state.find(el => el.title === action.payload.title);
      if (temp) return state.map(el => {
        if (el.title === action.payload.title) return {...el, qty: el.qty + action.payload.qty}
        return el
      })
      return [...state, action.payload];
    case EDIT_CART:
      return state.map(el => {
        if (el.title === action.payload.title) return {...el, qty: +action.payload.qty}
        return el
      })
      case DEL_PIZZA:
      return state.filter(el => el.title !== action.payload)
    case CART_CURRENCY:
      if (action.payload !== 'usd') return state.map(el =>  {return {...el, price: el.price*0.85}})
      return state.map(el => {return {...el, price: el.price/0.85}})
    default:
      return state;
  }
}
