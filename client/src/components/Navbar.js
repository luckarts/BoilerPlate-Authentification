import React, { Component } from 'react';

import Nav from '../style-component/NavStyle';

class Navbars extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {};
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
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
