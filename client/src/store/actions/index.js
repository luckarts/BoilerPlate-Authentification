import { CREATE_USER_REQUEST, CREATE_USER_ERRORS, LOGIN_USER_REQUEST } from './ActionTypes';

/*
Send to Action, and User to Saga
*/
export const createUserRequest = user => ({
  type: CREATE_USER_REQUEST,
  user,
});

export const createUserErrors = errors => ({
  type: CREATE_USER_ERRORS,
  errors,
});

export const loginUserRequest = user => ({
  type: LOGIN_USER_REQUEST,
  user,
});


