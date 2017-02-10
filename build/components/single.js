import React, { Component} from 'react';
import { Link } from 'react-router';

class singlePost extends Component {

  componentDidMount() {
    console.log("component did mouint of single" + this.props);
    this.props.getPost(this.props.params.id);
  }

  render() {
    const { post, loading, error } = this.props.currentPost;
    if (loading) {
      return <div className="container">Loading...</div>;
    } else if(error) {
      return  <div className="alert alert-danger">{error.message}</div>
    } else if(!post) {
      return <span />
    }

    return (
      <div className="container">
        <h3 dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
        <div dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
      </div>
    );
  }
}

export default singlePost;