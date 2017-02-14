import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './../reducers/reducers';
import promise from 'redux-promise';
import { devToolsEnhancer } from 'redux-devtools-extension';



const enhancer = applyMiddleware(promise);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
};