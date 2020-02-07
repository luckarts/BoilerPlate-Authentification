import React from "react";
import "./style.scss";
import { connect } from "react-redux";
import "./style.scss";
const Navbar = (props) => {
  const { isAuthenticated } = props;
  return (
    <nav>
      <a href="/">Authentification</a>
      {isAuthenticated && <a href="/profile/edit">{isAuthenticated.username}</a>}
    </nav>
  );
}


const mapStateToProps = (state) => ({
  isAuthenticated: state.User.user,
});
export default connect(mapStateToProps)(Navbar);
