import React from "react";
import { Route, IndexRoute } from "react-router";

import Main from "./containers/maincontainer";
import Single from "./containers/singlecontainer";
import App from "./components/app";
import SingleWrapper from "./components/singleContain";
import NotFound from "./components/404";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="post" component={SingleWrapper}>
      <Route path=":id" component={Single} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);
