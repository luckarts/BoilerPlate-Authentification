import React from "react";
import { connect } from "react-redux";

import Navbar from "components/Navigation";
import RegisterForm from "components/Form/";
import { createUserRequest } from "../../store/actions/index";
import "./style.scss";

const initialState = {
  username: '',
  email: '',
  password: '',
};
const Register = (props) => {

  const onSubmit = values => {
    props.createUserRequest(values);

  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Register</h1>
        <RegisterForm initialState={initialState} onSubmit={onSubmit} required />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  errors: state.formErrors
});
export default connect(mapStateToProps, { createUserRequest })(Register);
