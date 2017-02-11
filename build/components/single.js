import React, { Component} from 'react';
import { Link } from 'react-router';

class singlePost extends Component {

  componentDidMount() {
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
        <Link  to={"/"} > return home </Link>
        <h3 dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
        <div dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
        <ul> 
          <li> <Link  to={"post/"+ post.next_post.id} 
          dangerouslySetInnerHTML={{__html: post.next_post.title}} />  </li>
          <li> <Link  to={"post/"+ post.previous_post.id} 
           dangerouslySetInnerHTML={{__html: post.previous_post.title}} /></li>
        </ul>
      </div>
    );
  }
}

export default singlePost;