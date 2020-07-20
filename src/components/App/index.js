// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { compareUserArray } from 'src/utils';
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
      {/* <Route
        path="/error403"
        exact
      >
        <Error403 />
      </Route> */}
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
