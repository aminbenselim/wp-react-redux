import SinglePost from '../components/single.js';
import { getPost, getPostSuccess, getPostFailure} from '../actions/actions';
import { connect } from 'react-redux';



function mapStateToProps(globalState, ownProps) {
  return {
    currentPost: globalState.currentPost,
    postId: ownProps.id
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => {
      dispatch(getPost(id))
        .then((result) => {
          // Note: Error's "data" is in result.payload.response.data (inside "response")
          // success's "data" is in result.payload.data
          if (result.payload.response && result.payload.response.status !== 200) {
            dispatch(getPostFailure(result.payload.response.data));
            console.log('here');
          } else {
            dispatch(getPostSuccess(result.payload.data))
          }
        })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);