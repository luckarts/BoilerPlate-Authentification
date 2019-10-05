import { USER_LOGGED_IN } from "../actions/ActionTypes";
export default (state = { user: [{ loaded: false }] }, action) => {
  switch (action.type) {
  case USER_LOGGED_IN:
    return {
      ...state,
      user: action.user,
      loaded: true
    };

  default:
    return state;
  }
};
