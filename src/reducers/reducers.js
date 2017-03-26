import { combineReducers } from "redux";
import MainReducer from "./reducer_main";
import SingleReducer from "./reducer_single";

const reducers = combineReducers({
  postsList: MainReducer,
  currentPost: SingleReducer
});

export default reducers;
