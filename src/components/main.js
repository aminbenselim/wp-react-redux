import React, { Component } from "react";
import Post from "./post";
import { Link } from "react-router";

class Main extends Component {
  constructor(props) {
    super(props);
    this.currentPage = 1;
    this.loadMoreButton = this.loadMoreButton.bind(this);
  }
  componentWillMount() {
    console.log(this.currentPage);
    this.props.getPosts(this.currentPage);
  }

  componentDidMount() {
  }
  renderPosts(posts) {
    return posts.map(post => {
      return (
        <div key={post.id} className="post">
          <Link style={{ color: "black" }} to={"post/" + post.id}>
            <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </Link>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </div>
      );
    });
  }

 loadMoreButton(totalpages) {
    let clickHandler= function() {
      this.currentPage += 1;
      this.props.getPosts(this.currentPage);
    };
    clickHandler = clickHandler.bind(this);
    if (this.currentPage < totalpages) {
      return <button onClick={clickHandler}>load more </button>;
    }
  }

  render() {
    const { posts, loading, error, totalpages } = this.props.postsList;
    if (loading) {
      return <div className="container"><h1>Posts</h1><h3>Loading...</h3></div>;
    } else if (error) {
      return <div className="alert alert-danger">Error: {error.message}</div>;
    }

    return (
      <div className="container">
        <ul className="post-list">
          {this.renderPosts(posts)}
        </ul>
        {this.loadMoreButton(totalpages)}
      </div>
    );
  }
}

export default Main;
