import React, { Component } from 'react';
import Post from './post';
import {Link} from 'react-router';

class Main extends Component {
  componentWillMount() {
    this.props.getPosts();
  }

  componentDidMount() {
  }
  renderPosts(posts) {
    return posts.map((post) => {
     return (
        <div key={post.id}>
          <Link style={{color:'black'}} to={"post/"+ post.id}>
            <h3 dangerouslySetInnerHTML={{__html: post.title.rendered}}></h3>
          </Link>       
        </div>
      );
    });
 }

  render() {
    const { posts, loading, error } = this.props.postsList;

    if(loading) {
      return <div className="container"><h1>Posts</h1><h3>Loading...</h3></div>      
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return (
      <div className="container">
        <h1>Posts</h1>
        <ul className="list-group">
        {this.renderPosts(posts)}
        </ul>
      </div>
    );
  }
}


export default Main;