import React from "react";
import "./style.scss";
import { connect } from "react-redux";
import "./style.scss";
const Navbar = (props) => {
  const { isAuthenticated } = props;
  return (
    <nav>
      <a href="/">Authentification</a>

      {isAuthenticated && <a href="/profile/edit" className="profileIcon"> <img src={isAuthenticated.img && '/images/' + isAuthenticated.img.path} /></a>}
    </nav>
  );
}


const mapStateToProps = (state) => ({
  isAuthenticated: state.User.user,
});
export default connect(mapStateToProps)(Navbar);
