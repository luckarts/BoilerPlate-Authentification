import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createUserRequest } from '../actions/index';
import { validate } from '../components/validate';
import Container from '../style-component/FormStyle';
class Register extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
    };
  }

  renderInputField(field) {
    const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error' : ''}`;

    return (
      <div className={className}>
        <input
          type={field.type}
          autoComplete={field.autoComplete}
          {...field.input}
          placeholder={field.placeholder}
        />
        {field.meta.touched && <p className="text-danger">{field.meta.error}</p>}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
    this.props.createUserRequest(values);
  }

  render() {
    const { error } = this.props;
    console.log(error);
    return (
      <div>
        <Container>
          <h1>Register</h1>
          <form
            autoComplete="off"
            onSubmit={this.props.handleSubmit(e => {
              this.onSubmit(e);
            })}
          >
            <Field
              type="text"
              myLabel="username"
              name="username"
              placeholder="username"
              component={this.renderInputField}
            />

            <Field
              autoComplete="password"
              type="password"
              myLabel="password"
              name="password"
              placeholder="password"
              component={this.renderInputField}
            />

            <Field
              autoComplete="off"
              type="email"
              myLabel="email"
              name="email"
              placeholder="email"
              component={this.renderInputField}
            />

            <button type="submit">Sign In</button>
          </form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state,
});
export default reduxForm({ form: 'Register', validate })(
  connect(
    mapStateToProps,
    { createUserRequest }
  )(Register)
);
