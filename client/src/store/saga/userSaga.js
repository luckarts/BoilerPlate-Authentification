import { call, put } from 'redux-saga/effects';
import api from '../../API/api';
import { userLoggedIn } from '../actions/auth';
import { createUserErrors } from '../actions/index';
import history from "../../history";
// worker Saga: will be fired on userLoggedIn actions
export function* createUserSaga(action) {
  try {

    const user = yield call(api.user.signup, action.user);
    localStorage.setItem('token', user.token);

    //same as dispatch userLoggedIn action
    yield put(userLoggedIn(user));
    history.push("/profile/edit");
  } catch (err) {
    yield put(createUserErrors(err.response.data.error));
  }
}
export function* fetchUserSaga() {
  const headers = { Authorization: 'Bearer ' + localStorage.getItem('token') };
  const user = yield call(api.user.fetchCurrentUser, headers);
  yield put(userLoggedIn(user));
}

export function* loginUserSaga(action) {
  try {
    const user = yield call(api.user.login, action.user);
    localStorage.setItem('token', user.token);
    //same as dispatch userLoggedIn action
    yield put(userLoggedIn(user));
    history.push("/profile/edit");
  } catch (err) {
    yield put(createUserErrors(err.response.data.error));
  }
}
export function* updateUserRequest(action) {
  try {
    const user = yield call(api.user.update, action.user);
    yield put(userLoggedIn(user));
  } catch (err) {
    yield put(createUserErrors(err.response.data.error));
  }
}
