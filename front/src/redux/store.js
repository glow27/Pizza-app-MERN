import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cart from './cartReducer';
import user from './userReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({ cart, user });

const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('state');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('state', serializedState);
  } catch (error) {
    // errors.
  }
};

const persistedState = loadState();

export const store = createStore(
  reducer,
  persistedState,
  composeWithDevTools()
);

store.subscribe(() => {
  saveState(store.getState());
});
