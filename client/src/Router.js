import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import history from "./history";
import Register from "views/Register";
import Login from "views/Login";
import UserProfile from "views/UserProfile";
import PrivateRoutes from "./components/PrivateRoutes/";


class App extends Component {

  render() {
    return (
      <Router history={history} >
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoutes exact path="/profile/edit" component={UserProfile} />
      </Router>
    );
  }
}

export default App;
