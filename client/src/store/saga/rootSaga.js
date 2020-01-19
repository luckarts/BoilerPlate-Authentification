import { takeLatest } from 'redux-saga/effects';
import { CREATE_USER_REQUEST } from '../actions/ActionTypes';
import { createUserSaga } from './userSaga';

export default function* rootSaga() {
  /*
  Starts createUser on each dispatched `CREATE_USER_REQUEST` action.
  Allows concurrent create of user.
*/
  yield takeLatest(CREATE_USER_REQUEST, createUserSaga);
}
