import { CREATE_USER_REQUEST, CREATE_USER_ERRORS } from './ActionTypes';

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
