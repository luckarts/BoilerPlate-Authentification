import React, { Component } from "react";
import Navbar from "../components/Navbar";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default Home;
