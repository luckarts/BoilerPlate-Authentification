import React from "react";
import { connect } from "react-redux";

import Navbar from "components/Navigation";
import LoginForm from "components/Form";
import { loginUserRequest } from "store/actions";
import "./style.scss";

const initialState = {
  username: '',
  password: '',
};

const Login = (props) => {

  const onSubmit = values => {
    props.loginUserRequest(values);

  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Login</h1>
        <LoginForm initialState={initialState} onSubmit={onSubmit} required />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, { loginUserRequest })(Login);
