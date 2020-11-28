import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cart from './cartReducer';
import pizza from './pizzaReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({cart, pizza})

// const preloadedState = window.localStorage.getItem('state') || '{"pizza": []}';
// const initialState = JSON.parse(preloadedState);



export const store = createStore(reducer, composeWithDevTools());

// store.subscribe(() => {
//   const state = store.getState();
//   window.localStorage.setItem('state', JSON.stringify(state));
// });
