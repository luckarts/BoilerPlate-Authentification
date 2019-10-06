import React from 'react';
import { connect } from 'react-redux';
import Container from '../style-component/FormStyle';
import RegisterForm from '../container/form/RegisterForm';

const Register = () => {
  return (
    <div>
      <Container>
        <h1>Register</h1>
        <RegisterForm />
      </Container>
    </div>
  );
};

export default connect()(Register);
