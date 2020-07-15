import React from 'react';
import { Route } from 'react-router-dom';

import vincent from 'src/assets/images/vct.png';
import manon from 'src/assets/images/mnn.png';
import axel from 'src/assets/images/axl.png';
import nico from 'src/assets/images/ncl.png';
import fidia from 'src/assets/images/fid.png';
import headphone from 'src/assets/images/headphone.png';
import avatar from 'src/assets/images/fabio.png';


import Home from 'src/containers/Home';
import Research from 'src/containers/Research';
import Favorites from 'src/containers/Favorites';
import SinglePage from 'src/containers/SinglePage';

import Account from 'src/containers/Account';

import LegalMentions from '../LegalMentions';
import About from '../About';

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
