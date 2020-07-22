// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';

import { compareUserArray, displayError } from 'src/utils';
import { setErrors } from 'src/actions/errors';

import Login from 'src/containers/Login';
import Subscribe from 'src/containers/Subscribe';
import Header from '../Header';
import Footer from '../Footer';
import Page from '../Page';
import Error403 from '../Error403';
import Error404 from '../Error404';
import Error500 from '../Error500';
import './styles.scss';

const App = ({
  fetchVideos,
  fetchCategories,
  fetchAuthors,
  fetchDurations,
  fetchUsers,
  verifSession,
  isLogged,
  importFavorites,
  // errors,
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
    importFavorites();
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
  importFavorites: PropTypes.func.isRequired,
  // errors: PropTypes.string.isRequired,
};

// == Export
export default App;
