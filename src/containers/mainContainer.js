import { connect } from 'react-redux'
import { getPosts, getPostsSuccess, getPostsFailure } from './../actions/actionCreators';
import Main from '../components/main';



const mapStateToProps = (state) => {
  return { 
    postsList: state.postsList
  };
}

let posts = [];

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (page) => {
      dispatch(getPosts(page))
      .then((response) => {
            if(!response.error){
              newPosts = posts.concat(response.payload.data);
              dispatch(getPostsSuccess(newPosts,
              +response.payload.headers['x-wp-totalpages']));
            } else {
              dispatch(getPostsFailure(response.payload.data));
            }
          });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);