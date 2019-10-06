import { combineReducers } from 'redux';
import User from './User';
import { reducer as reduxFormReducer } from 'redux-form';
import formErrors from './formErrors';
export default combineReducers({
  form: reduxFormReducer,
  User,
  formErrors,
});
