import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { loginUserRequest } from "store/actions";
import { validate } from "../validate";
import "./style.scss";
import ReduxformInput from "../Field";

const LoginForm = props => {
  const onSubmit = values => {
    props.loginUserRequest(values);
  };

  const { serverErrors, handleSubmit } = props;
  return (
    <form autoComplete="off" onSubmit={handleSubmit(e => onSubmit(e))}>
      <Field
        type="text"
        myLabel="username"
        name="username"
        placeholder="username"
        component={ReduxformInput}
        errors={serverErrors.errors.username}
      />

      <Field
        autoComplete="password"
        type="password"
        myLabel="password"
        name="password"
        placeholder="password"
        component={ReduxformInput}
        errors={serverErrors.errors.password}
      />

      <button type="submit">SignUp</button>
    </form>
  );
};
const mapStateToProps = state => ({
  serverErrors: state.formErrors
});
export default reduxForm({ form: "Register", validate })(
  connect(
    mapStateToProps,
    { loginUserRequest }
  )(LoginForm)
);
