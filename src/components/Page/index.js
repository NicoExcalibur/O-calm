import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../Home';
import Research from '../Research';
import Favorites from '../Favorites';
import Account from '../Account';

const Page = () => (
  <div className="page">
    <Route
      path="/"
      exact
    >
      <Home />
    </Route>
    <Route
      path="/research"
      exact
    >
      <Research />
    </Route>
    <Route
      path="/favorites"
      exact
    >
      <Favorites />
    </Route>
    <Route
      path="/account"
      exact
    >
      <Account />
    </Route>
  </div>
);

export default Page;
