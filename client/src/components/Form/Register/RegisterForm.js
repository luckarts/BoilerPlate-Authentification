import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createUserRequest } from "../../../store/actions/index";
import { validate } from "../validate";
import "./style.scss";
import ReduxformInput from "../Field";

const RegisterForm = props => {
  const onSubmit = values => {
    props.createUserRequest(values);
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

      <Field
        autoComplete="off"
        type="email"
        myLabel="email"
        name="email"
        placeholder="email"
        component={ReduxformInput}
        errors={serverErrors.errors.email}
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
    { createUserRequest }
  )(RegisterForm)
);
