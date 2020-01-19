import { call, put } from 'redux-saga/effects';
import api from '../../API/api';
import { userLoggedIn } from '../actions/auth';
import { createUserErrors } from '../actions/index';
// worker Saga: will be fired on userLoggedIn actions
export function* createUserSaga(action) {
  try {
    const user = yield call(api.user.signup, action.user);
    localStorage.setItem('token', user.token);
    //same as dispatch userLoggedIn action
    yield put(userLoggedIn(user));
  } catch (err) {
    yield put(createUserErrors(err.response.data.error));
  }
}
