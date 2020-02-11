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
    values.newImage = 'images/' + values.newImage[0].name;
    values.oldUsername = isAuthenticated.username;
    values.id = isAuthenticated.id;
    updateUserRequest(values);

  };
  return (
    <div>
      <Navbar />
      <div className="container">

        <div className="profile">
          <h1>My profile</h1>
          <img src="blob:http://localhost:3000/bf6c49e5-7510-4ff6-af73-3ed6d5d867ad" />
          <h2>{isAuthenticated.username}</h2>
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
});
export default connect(mapStateToProps, { updateUserRequest })(UserProfile);

