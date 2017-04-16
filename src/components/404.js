import { Link } from "react-router";
import React, { Component } from "react";
export default class NotFound extends Component {
  render() {
    return (
      <div>
        sorry the page is not found , maybe return
        {" "}
        <Link to="/">Home</Link>
        {" "}
        ?
        {" "}
      </div>
    );
  }
}
