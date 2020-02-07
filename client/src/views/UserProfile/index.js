import React, { useState } from "react";
import { connect } from "react-redux";

import Navbar from "components/Navigation";
import UpdateUser from "components/Form/";
import "./style.scss";
const UserProfile = ({ isAuthenticated }) => {
  const [file, setFile] = useState(null);
  const [newImage, setnewImage] = useState([]);

  const handleOnDrop = (e) => {
    let newImage = e[0];
    setnewImage(e.map(file => Object.assign(file, { preview: URL.createObjectURL(file) })));
    setFile(newImage);
  };
  const onSubmit = () => { };
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>My profile</h1>
        <h2>{isAuthenticated.username}</h2>
        <UpdateUser handleOnDrop={handleOnDrop}
          onSubmit={onSubmit}
          newImage={newImage}
          isAuthenticated={isAuthenticated}
          file={file}
          username
          password
          email
          img
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.User.user,
});
export default connect(mapStateToProps)(UserProfile);

