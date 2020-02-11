import { CREATE_USER_ERRORS } from '../actions/ActionTypes';
export default (state = { errors: {} }, action) => {
  switch (action.type) {
    case CREATE_USER_ERRORS:
      return { ...state, errors: action.errors };
    default:
      return state;
  }
};
