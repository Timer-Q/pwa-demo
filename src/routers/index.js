import React from "react";
import { Switch, Route, Redirect, Router } from "react-router-dom";

import history from "./history";

import Movies from "../containers/Movies";
import Subject from "../containers/Subject";

function Routes() {
  return (
    <React.Fragment>
      <Router history={history}>
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/subject/:id" component={Subject} />
          <Route path="/" render={() => <Redirect to="/movies" />} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default Routes;
