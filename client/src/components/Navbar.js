import React, { Component } from "react";

import Nav from "../style-component/NavStyle";

class Navbars extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Nav>
        <a href="/">Poker School Online</a>
      </Nav>
    );
  }
}

export default Navbars;
