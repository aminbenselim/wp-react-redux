import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './containers/maincontainer';
import Single from './containers/singlecontainer';
import App from './components/app'
import SingleContain from './components/singleContain';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="post" component={SingleContain}> 
         <Route path=":id" component={Single}/>
    </Route>
  </Route>
);