import { 
    GET_POSTS, 
    GET_POSTS_SUCCESS, 
    GET_POSTS_FAILURE, 
    } from './../actions/actions';


	const INITIAL_STATE = { posts: [], error:null, loading: false, totalpages: 0};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

  case GET_POSTS:// start fetching posts and set loading = true
  	return { posts:[], error: null, loading: true, totalpages: 0}; 
  case GET_POSTS_SUCCESS:// return list of posts and make loading = false
    return { posts: action.payload, error:null, loading: false, totalpages: action.totalpages};
  case GET_POSTS_FAILURE:// return error and make loading = false
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
    return {posts: [], error: error, loading: false, totalpages:0};
  default:
    return state;
  }
}