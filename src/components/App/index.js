// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { compareUserArray } from 'src/utils';
import Login from 'src/containers/Login';
import Header from '../Header';
import Footer from '../Footer';
import Page from '../Page';
import Subscribe from '../Subscribe';
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

  let logging = false;

  const loadPage = () => {
    if (isLogged === true) {
      logging = true;
    } if (isLogged === false) {
      logging = false;
    }
    verifSession()
      .then(logging = true)
      .then(logging = false);
    return logging;
  };
  useEffect(() => {
    fetchVideos();
    fetchUsers();
    fetchCategories();
    fetchAuthors();
    fetchDurations();
    // loadPage();
  }, []);

  return (
    <div className="app">
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
