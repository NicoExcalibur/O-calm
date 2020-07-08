// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import Page from '../Page';
// import Login from '../Login';
import './styles.scss';

const App = ({ fetchVideos }) => {
  useEffect(() => {
    fetchVideos();
  }, []);

  const [menuBool, setMenuBool] = useState(false);

  const openMenu = () => {
    setMenuBool(!menuBool);
  };

  return (
    <div className="app">
      {/* <Login /> */}
      <Header openMenu={openMenu} menuBool={menuBool} />
      <Page />
      <Footer />
    </div>
  );
};

App.propTypes = {
  fetchVideos: PropTypes.func.isRequired,
};

// == Export
export default App;
