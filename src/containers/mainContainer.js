import { connect } from 'react-redux'
import { getPosts, getPostsSuccess, getPostsFailure } from './../actions/actions';
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
              posts = posts.concat(response.payload.data);
              dispatch(getPostsSuccess(posts,
              +response.payload.headers['x-wp-totalpages']));
            } else {
              dispatch(getPostsFailure(response.payload.data));
            }
          });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);