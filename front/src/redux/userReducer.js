import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...action.payload, auth: true };
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
}
