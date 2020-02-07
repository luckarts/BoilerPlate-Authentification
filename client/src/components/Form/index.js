import React from 'react';
import { useForm } from 'react-hook-form';
import "./style.scss";
import { createUserRequest } from "../../store/actions/index";
import { connect } from "react-redux";
import Field from './Field';
import Dropzone from './DropZone';
const Form = (props) => {

  const { newImage, onSubmit, img, email, username, password, isAuthenticated } = props;
  const { register, handleSubmit, errors } = useForm();


  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      {
        username && <Field
          name="username"
          type="text"
          placeholder="username"
          value={isAuthenticated && isAuthenticated.username}
          errors={errors.username}
          register={register}
          required
        />}

      {password && <Field
        type="password"
        name="password"
        placeholder="password"
        errors={errors.password}
        register={register}
        required
      />}


      {email && <Field
        type="email"
        name="email"
        placeholder="email"
        value={isAuthenticated && isAuthenticated.email}
        errors={errors.email}
        register={register}
        required
      />}
      {img && <Dropzone
        type="file"
        name="img"
        errors={errors.img}
        handleOnDrop={props.handleOnDrop}
        newImage={newImage}
      />}

      <input type="submit" />
    </form>
  );

};
const mapStateToProps = (state) => ({
  errors: state.formErrors
});
export default connect(mapStateToProps, { createUserRequest })(Form);
