import { USER_LOGGED_IN } from './ActionTypes';

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user,
});
