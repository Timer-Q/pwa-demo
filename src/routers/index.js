import React from "react";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";

import Movies from "../containers/Movies";
import Subject from "../containers/Subject";

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/movies" component={Movies} />
        <Route path="/subject/:id" component={Subject} />
        <Route path="/" render={() => <Redirect to="/movies" />} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
