import React from "react";
import { connect } from "react-redux";

import Navbar from "components/Navigation";
import RegisterForm from "components/Form/Register/RegisterForm";
import "./style.scss";
const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Register</h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default connect()(Register);
