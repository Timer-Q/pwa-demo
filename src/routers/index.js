import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Timeline from '../components/Timeline';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/timeline" component={Timeline} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
