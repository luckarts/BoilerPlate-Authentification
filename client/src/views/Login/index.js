import React from "react";
import { connect } from "react-redux";

import Navbar from "components/Navigation";
import LoginForm from "components/Form";
import { loginUserRequest } from "store/actions";
import "./style.scss";
const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Login</h1>
        <LoginForm createUserRequest={loginUserRequest} username password />
      </div>
    </div>
  );
};

export default connect()(Login);
