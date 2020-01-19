import React from "react";
import { connect } from "react-redux";

import Navbar from "components/Navigation";
import LoginForm from "components/Form/Login";
import "./style.scss";
const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default connect()(Login);
