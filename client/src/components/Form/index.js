import React, { useReducer, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createUserRequest } from "../../store/actions/index";
import { connect } from "react-redux";
import Field from './Field';
import Dropzone from './DropZone';
import "./style.scss";

function reducer(state, { field, value }) {
  return { ...state, [field]: value };
}

const Form = (props) => {

  const { onSubmit, initialState, required, isAuthenticated } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errorServer, setErrors] = useState({});

  useEffect(() => {
    setErrors({ errors: props.serverErrors });
  }, [props.serverErrors]);

  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };
  const handleOnDrop = (e) => {
    let file = e.target.files[0];
    let value = Object.assign(file, { preview: URL.createObjectURL(file) });
    dispatch({ field: "newImage", value: value });
  };

  useEffect(() => {
    if (isAuthenticated) {
      dispatch({ field: "username", value: isAuthenticated.username });
      dispatch({ field: "email", value: isAuthenticated.email });
    }
  }, [isAuthenticated]);

  const {
    username,
    email,
    password,
    newPassword,
    confirmPassword,
    newImage, } = state;
  let { register, handleSubmit, errors } = useForm();



  return (
    <form onSubmit={handleSubmit(onSubmit)} >

      {username !== undefined && <Field
        name="username"
        type="text"
        label="Username"
        value={username}
        errors={errors.username}
        autoFocus
        error={errorServer.errors && errorServer.errors.username}
        register={register}
        onChange={onChange}
        required={required}
      />}
      {email !== undefined && <Field
        type="email"
        name="email"
        label="Email"
        value={email}
        errors={errors.email}
        error={errorServer.errors && errorServer.errors.email}
        register={register}
        onChange={onChange}
        required={required}
      />}

      {password !== undefined && <Field
        type="password"
        name="password"
        label="Password"
        value={password}
        error={errorServer.errors && errorServer.errors.password}
        errors={errors.password}
        register={register}
        onChange={onChange}
        required={required}
      />}
      {newPassword !== undefined && <Field
        type="password"
        name="newPassword"
        label="NewPassword"
        value={newPassword}
        errors={errors.newPassword}
        register={register}
        onChange={onChange}
        required={required}
      />}

      {confirmPassword !== undefined && <Field
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        label="confirmPassword"
        errors={errors.confirmPassword}
        register={register}
        onChange={onChange}

      />}



      {newImage !== undefined && <Dropzone
        type="file"
        name="newImage"
        register={register}
        errors={errors.newImage}
        handleOnDrop={handleOnDrop}
        newImage={newImage}

      />}

      <input type="submit" />
    </form>
  );

};
const mapStateToProps = (state) => ({
  serverErrors: state.formErrors.errors
});
export default connect(mapStateToProps, { createUserRequest })(Form);
