import { USER_LOGGED_IN } from './ActionTypes';
/*
saga dispatch userLoggedIn action and send user to reducer
*/
export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user,
});
