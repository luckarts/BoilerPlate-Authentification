import { combineReducers } from "redux";
import User from "./User";
import { reducer as reduxFormReducer } from "redux-form";
export default combineReducers({
  form: reduxFormReducer, // mounted under "form"
  use: User
});
