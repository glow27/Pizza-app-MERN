import {
  ADD_PIZZA,
  EDIT_CART,
  CALCULATE_CURRENCY,
  DEL_PIZZA,
  MAKE_ORDER,
  CHANGE_CURRENCY,
} from './actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = { list: [], usd: true }, action) {
  switch (action.type) {
    case ADD_PIZZA:
      const temp = state.list.find((el) => el.title === action.payload.title);
      if (temp)
        return {
          ...state,
          list: state.list.map((el) => {
            if (el.title === action.payload.title)
              return { ...el, qty: el.qty + action.payload.qty };
            return el;
          }),
        };
      return { ...state, list: [...state.list, action.payload] };
    case EDIT_CART:
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.title === action.payload.title)
            return { ...el, qty: +action.payload.qty };
          return el;
        }),
      };
    case CALCULATE_CURRENCY:
      if (action.payload !== 'usd')
        return {
          ...state,
          list: state.list.map((el) => {
            return { ...el, price: el.price * 0.85 };
          }),
        };
      return {
        ...state,
        list: state.list.map((el) => {
          return { ...el, price: el.price / 0.85 };
        }),
      };
    case DEL_PIZZA:
      return {
        ...state,
        list: state.list.filter((el) => el.title !== action.payload),
      };
    case CHANGE_CURRENCY:
      return { ...state, usd: !state.usd };
    case MAKE_ORDER:
      return { ...state, list: [] };
    default:
      return state;
  }
}
