import { 
    GET_POSTS, 
    GET_POSTS_SUCCESS, 
    GET_POSTS_FAILURE, 
  } from './../actions/actions';


	const INITIAL_STATE = { posts: [], error:null, loading: false, totalpages: 0};

 const Posts = (state = INITIAL_STATE, action) => {
  let error;
  switch(action.type) {

  case GET_POSTS:
  	return { posts:[], error: null, loading: true, totalpages: 0}; 

  case GET_POSTS_SUCCESS:
    return {posts:action.payload ,error:null,loading:false,totalpages:action.totalpages};
    

  case GET_POSTS_FAILURE:
    error = action.payload || {message: action.payload.message};
    return {posts: [], error: error, loading: false, totalpages:0};

  default:
    return state;
  }
}

export default Posts;