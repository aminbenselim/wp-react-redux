import axios from "axios";

import * as actionTypes from "./actionTypes";

// Posts List action creators
export function getPosts(page) {
  const request = axios.get(
    `/wp-json/wp/v2/posts?context=embed&per_page=4&page=${page}`
  );
  return {
    type: actionTypes.GET_POSTS,
    payload: request
  };
}

export function getPostsSuccess(posts, totalpages, previous) {
  return {
    type: actionTypes.GET_POSTS_SUCCESS,
    payload: posts,
    totalpages,
    posts: previous
  };
}

export function getPostsFailure(error) {
  return {
    type: actionTypes.GET_POSTS_FAILURE,
    payload: error
  };
}

// Single Post action creators
export function getPost(id) {
  const request = axios.get(`/wp-json/wp/v2/posts/${id}`);

  return {
    type: actionTypes.GET_POST,
    payload: request
  };
}

export function getPostSuccess(currentPost) {
  return {
    type: actionTypes.GET_POST_SUCCESS,
    payload: currentPost
  };
}

export function getPostFailure(error) {
  return {
    type: actionTypes.GET_POST_FAILURE,
    payload: error
  };
}

export function resetPost() {
  return {
    type: actionTypes.RESET_POST
  };
}
