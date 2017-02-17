import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore.js';


const persistedState = localStorage.getItem('State') ? JSON.parse(localStorage.getItem('State')) : {}

const store = configureStore(persistedState);



ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
  ,document.getElementById('main'));

export default store;

