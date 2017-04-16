import React, { Component } from "react";
import { Link } from "react-router";

class Post extends Component {
  render() {
    const title = this.props.title;
    const content = this.props.content;
    return (
      <div>
        <Link style={{ color: "black" }} to={this.props.id.toString}>
          <h3>{title}</h3>
        </Link>
      </div>
    );
  }
}

export default Post;
