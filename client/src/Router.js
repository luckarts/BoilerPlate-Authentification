import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import Register from "views/Register";
import Login from "views/Login";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
      </HashRouter>
    );
  }
}

export default App;
