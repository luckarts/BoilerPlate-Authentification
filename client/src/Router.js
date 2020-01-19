import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import Register from "./views/Register";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Register} />
      </HashRouter>
    );
  }
}

export default App;
