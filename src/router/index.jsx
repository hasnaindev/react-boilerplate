import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/Home';

const MainRouter = () => (
  <Switch>
    <Route exact component={HomePage} path="/" />
  </Switch>
);

export default MainRouter;
