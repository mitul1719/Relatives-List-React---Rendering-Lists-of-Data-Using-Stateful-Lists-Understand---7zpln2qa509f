import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  state = {
    items: ["a", "b", "c"].map((data, i) => (
      <li key={`relativeListItem${i + 1}`}>{data}</li>
    )),
  };

  render() {
    return (
      <div id="main">
        <ol key="relativeList">{this.state.items}</ol>
        {/* Do not remove the main div */}
      </div>
    );
  }
}

export default App;
