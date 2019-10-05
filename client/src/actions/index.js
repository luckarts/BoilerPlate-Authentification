import { CREATE_USER_REQUEST } from './ActionTypes';

/*
Send to Action, and User to Saga
*/
export const createUserRequest = user => ({
  type: CREATE_USER_REQUEST,
  user,
});
