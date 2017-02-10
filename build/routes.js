import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './containers/maincontainer';
import Single from './containers/singlecontainer';
import App from './components/app'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="/post/:id" component={Single} />
  </Route>
);