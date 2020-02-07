import React from 'react';
import { useForm } from 'react-hook-form';
import "./style.scss";
import { createUserRequest } from "../../store/actions/index";
import { connect } from "react-redux";
import Field from './Field';
import Dropzone from './DropZone';
const Form = (props) => {

  const { newImage, onSubmit, img, email, username, password } = props;
  const { register, handleSubmit, errors } = useForm();


  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      {
        username && <Field
          name="username"
          type="text"
          placeholder="username"
          errors={errors.username}
          ref={register({ required: true })} />}

      {password && <Field
        type="password"
        name="password"
        placeholder="password"
        errors={errors.password}
        ref={register({ required: true })} />}

      {email && <Field
        type="email"
        name="email"
        placeholder="email"
        errors={errors.email}
        ref={register({ required: true })} />}
      {img && <Dropzone
        type="file"
        name="img"
        errors={errors.img}
        ref={register({ required: true })}
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
