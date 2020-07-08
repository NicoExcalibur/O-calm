// == Import npm
import React, { useState } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Page from '../Page';
// import Login from '../Login';
import './styles.scss';
// http://ec2-100-25-192-123.compute-1.amazonaws.com/o-calm/wp-json/wp/v2/video
// url for videos
const App = () => {
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

// == Export
export default App;
