// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';

import Login from 'src/containers/Login';
import Subscribe from 'src/containers/Subscribe';
import Header from '../Header';
import Footer from '../Footer';
import Page from '../Page';
import Error404 from '../Error404';
import Ocalm from '../Ocalm';

import './styles.scss';

const App = ({
  fetchVideos,
  fetchCategories,
  fetchAuthors,
  fetchDurations,
  fetchUsers,
  verifSession,
  isLogged,
}) => {
  const [menuBool, setMenuBool] = useState(false);

  const openMenu = () => {
    setMenuBool(!menuBool);
  };

  useEffect(() => {
    verifSession();
    fetchVideos();
    fetchUsers();
    fetchCategories();
    fetchAuthors();
    fetchDurations();
  }, []);

  return (
    <div className="app">
      <Switch>
        {!isLogged && (
        <Route
          path="/"
          exact
        >
          <Login />
        </Route>
        )}
        <Route
          path="/subscribe"
          exact
        >
          <Subscribe />
        </Route>
        <Route exact path="/about-ocalm">
          <Ocalm />
        </Route>
        {isLogged && (
        <div className="app">
          <Header openMenu={openMenu} menuBool={menuBool} />
          <Page />
          <Footer />
        </div>
        )}
        <Route path="/error404">
          <Error404 />
        </Route>
        <Route path="*">
          <Redirect to="/error404" />
        </Route>
      </Switch>
    </div>
  );
};

App.propTypes = {
  fetchVideos: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  fetchAuthors: PropTypes.func.isRequired,
  fetchDurations: PropTypes.func.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  verifSession: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default App;
