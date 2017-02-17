import { connect } from 'react-redux'
import { getPosts, getPostsSuccess, getPostsFailure } from './../actions/actions';
import Main from '../components/main';


const mapStateToProps = (state) => {
  return { 
    postsList: state.postsList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (page) => {
      dispatch(getPosts(page))
      .then((response) => {
            if(!response.error){
              dispatch(getPostsSuccess(response.payload.data));
            } else {
              dispatch(getPostsFailure(response.payload.data));
            }
          });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);