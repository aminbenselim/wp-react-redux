import axios from 'axios';

//Post list
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

//Single post
export const GET_POST = 'GET_POST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAILURE = 'GET_POST_FAILURE';


// Posts List action creators
export function getPosts() {
  const request = axios({
    method: 'get',
    url: '/wordpress/wp-json/wp/v2/posts',
    headers: []
  });

  return {
    type: GET_POSTS,
    payload: request
  };
}

export function getPostsSuccess(posts) {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts
  };
}

export function getPostsFailure(error) {
  return {
    type: GET_POSTS_FAILURE,
    payload: error
  };
}


// Single Post action creators
export function getPost(id) {
  const request = axios.get(`/wordpress/wp-json/wp/v2/posts/${id}`);

  return {
    type: GET_POST,
    payload: request
  };
}


export function getPostSuccess(currentPost) {
  return {
    type: GET_POST_SUCCESS,
    payload: currentPost
  };
}

export function getPostFailure(error) {
  return {
    type: GET_POST_FAILURE,
    payload: error
  };
}