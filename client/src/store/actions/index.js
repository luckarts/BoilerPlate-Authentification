import { CREATE_IMG_REQUEST, CREATE_USER_REQUEST, CREATE_USER_ERRORS, LOGIN_USER_REQUEST, UPDATE_USER_REQUEST, FETCH_CURRENT_USER_REQUEST, FETCH_CURRENT_USER_SUCCESS } from './ActionTypes';

/*
Send to Action, and User to Saga
*/
export const createUserRequest = user => (console.log(user, 'action'), {
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

export const fetchUserRequest = user => ({
  type: FETCH_CURRENT_USER_REQUEST,
  user,
});
export const fetchCurrentUserSuccess = user => ({
  type: FETCH_CURRENT_USER_SUCCESS,
  user,
});
export const updateUserRequest = (formdata, id) => ({
  type: UPDATE_USER_REQUEST,
  formdata, id
});



