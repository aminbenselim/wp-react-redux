import React, { Component} from 'react';
import { Link } from 'react-router';

class singlePost extends Component {
  componentWillReceiveProps(nextprops){
    if(this.props.params.id !== nextprops.params.id) {
      this.scrollToTop(nextprops.params.id);
    }
  }

  scrollToTop(id){
    const getPost = this.props.getPost;
    var s = setInterval(function() {
    var pos = window.pageYOffset;
    if ( pos > 0 ) {
        window.scrollTo( 0, pos - 20 );
        if(pos < 40)  getPost(id);
    } else {
      clearInterval(s);
    }
   }, 16);
  }
  
  componentDidMount() {
    this.props.getPost(this.props.params.id);
  }

  componentWillUnmount() {
    this.props.resetPost();
  } 
  renderNextPrev(post) {
    if(!post.previous_post) {
      return (<ul> 
         <li> <Link  to={"post/"+ post.next_post.id} 
          dangerouslySetInnerHTML={{__html: post.next_post.title}} />  </li>
        </ul>);
    }
     if(!post.next_post) {
      return (<ul> 
          <li> <Link  to={"post/"+ post.previous_post.id} 
           dangerouslySetInnerHTML={{__html: post.previous_post.title}} /></li>
        </ul>);
    }
      return (<ul> 
         <li> <Link  to={"post/"+ post.next_post.id} 
          dangerouslySetInnerHTML={{__html: post.next_post.title}} />  </li>
          <li> <Link  to={"post/"+ post.previous_post.id} 
           dangerouslySetInnerHTML={{__html: post.previous_post.title}} /></li>
        </ul>);     
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
      <div className="single">
        <Link  to={"/"} > return home </Link>
        <h3 className='single title' dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
        <div className='single content' dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
        {this.renderNextPrev(post)}
      </div>
    );
  }
}

export default singlePost;