import { USER_LOGGED_IN, FETCH_CURRENT_USER_SUCCESS } from "../actions/ActionTypes";

export default (state = { user: [{ loaded: false }] }, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        user: action.user,
        loaded: true
      };
    case FETCH_CURRENT_USER_SUCCESS:
      console.log(action.user, 'reducer');
      return {
        ...state,
        user: action.user,
        loaded: true
      };

    default:
      return state;
  }
};
