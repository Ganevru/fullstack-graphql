import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Pets from '../pages/Pets';
import Header from './Header';

const App = () => (
  <Fragment>
    <Header />
    <div>
      <Switch>
        <Route exact path="/" component={Pets} />
      </Switch>
    </div>
  </Fragment>
);

export default App;
