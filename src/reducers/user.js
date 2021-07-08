import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const wasLogged = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      email: action.payload,
    };
  default:
    return state;
  }
};

export default wasLogged;
