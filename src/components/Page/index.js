import React from 'react';
import { Route } from 'react-router-dom';

import Home from 'src/containers/Home';
import Research from 'src/containers/Research';
import Favorites from 'src/containers/Favorites';
import Account from '../Account';
import LegalMentions from '../LegalMentions';
import About from '../About';
import SinglePage from 'src/containers/SinglePage';

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
    <Route
      path="/legal"
      exact
    >
      <LegalMentions />
    </Route>
    <Route
      path="/about"
      exact
    >
      <About />
    </Route>
    <Route
      path="/player/:slug"
      exact
    >
      <SinglePage />
    </Route>
  </div>
);

export default Page;
