import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <main className="container">
        {this.props.children}
      </main>
    );
  }
}
