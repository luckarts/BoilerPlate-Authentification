import React, { useState } from "react";
import { connect } from "react-redux";

import Navbar from "components/Navigation";
import UpdateUser from "components/Form";
import { updateUserRequest } from "store/actions/index";
import "./style.scss";




const UserProfile = ({ isAuthenticated, updateUserRequest }) => {


  const [form] = useState({
    username: null,
    email: null,
    password: null,
    newPassword: null,
    confirmPassword: null,
    newImage: []
  });

  const onSubmit = values => {
    let formdata = new FormData();
    for (let key in values) {
      formdata.append(key, values[key]);
    }
    formdata.append("path", values.path[0]);
    updateUserRequest(formdata, isAuthenticated.id);
  };

  return (
    <div>
      <Navbar />
      <div className="container">

        <div className="profile">
          <h1>My profile</h1>
          <img src={isAuthenticated.img && '/images/' + isAuthenticated.img.path} />

          <h2>{isAuthenticated && isAuthenticated.username}</h2>
        </div>


        <UpdateUser
          onSubmit={onSubmit}
          initialState={form}
          isAuthenticated={isAuthenticated}
          img
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.User.user,
  serverErrors: state.formErrors.errors
});
export default connect(mapStateToProps, { updateUserRequest })(UserProfile);

