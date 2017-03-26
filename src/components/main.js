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
    console.log(this.props.params);

    this.props.getPosts(this.currentPage);
  }

  renderPosts(posts) {
    return posts.map(post => {
      let excerpt = post.excerpt.rendered;
      excerpt = excerpt.replace('[&hellip;]','');
      const style = {
      maxWidth: '500px',
      padding: '20px',
      margin: '0 auto',
    }
    return (
        <article key={post.id} style={style} className="post">
          <Link style={{ color: "black" }} to={"post/" + post.id}>
            <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </Link>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
           <Link to={"post/" + post.id}>
            <h4>read more</h4>
          </Link>
        </article>
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
      const style = {
        backgroundColor: 'turquoise',
        color: 'white',
        margin: '0 auto',
        width: '300px',
        borderRadius: '5px'

      }
      return <button onClick={clickHandler} style={style}>load more </button>;
    }
  }

  render() {
    const { posts, loading, error, totalpages } = this.props.postsList;
    if (loading) {
      return <main className="container"><h1>Posts</h1><h3>Loading...</h3></main>;
    } else if (error) {
      return <div className="alert alert-danger">Error: {error.message}</div>;
    }

    return (
        <div className="post-list">
          {this.renderPosts(posts)}
        {this.loadMoreButton(totalpages)}
       </div>


    );
  }
}

export default Main;
