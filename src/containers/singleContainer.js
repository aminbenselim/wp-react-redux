import SinglePost from "../components/single.js";
import {
  getPost,
  getPostSuccess,
  getPostFailure,
  resetPost
} from "../actions/actionCreators";
import { connect } from "react-redux";

function mapStateToProps(globalState, ownProps) {
  return {
    currentPost: globalState.currentPost,
    postId: ownProps.id
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getPost: id => {
      dispatch(getPost(id)).then(result => {
        if (result.payload.response && result.payload.response.status !== 200) {
          dispatch(getPostFailure(result.payload.response.data));
        } else {
          dispatch(getPostSuccess(result.payload.data));
        }
      });
    },
    resetPost: () => {
      dispatch(resetPost());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
