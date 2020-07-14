// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import Page from '../Page';
import Login from '../Login';
import Subscribe from '../Subscribe';
import './styles.scss';

const App = ({
  fetchVideos,
  fetchCategories,
  fetchAuthors,
  fetchDurations,
  fetchUsers,
}) => {
  useEffect(() => {
    fetchVideos();
    fetchUsers();
    fetchCategories();
    fetchAuthors();
    fetchDurations();
  }, []);

  const [menuBool, setMenuBool] = useState(false);

  const openMenu = () => {
    setMenuBool(!menuBool);
  };

  return (
    <div className="app">
      <Subscribe />
      {/* <Header openMenu={openMenu} menuBool={menuBool} />
      <Page />
      <Footer /> */}
    </div>
  );
};

App.propTypes = {
  fetchVideos: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  fetchAuthors: PropTypes.func.isRequired,
  fetchDurations: PropTypes.func.isRequired,
  fetchUsers: PropTypes.func.isRequired,
};

// == Export
export default App;
