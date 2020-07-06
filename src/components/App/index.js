// == Import npm
import React, { useState } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Page from '../Page';
import './styles.scss';

// == Composant
const App = () => {
  const [menuBool, setMenuBool] = useState(false);

  const openMenu = () => {
    setMenuBool(!menuBool);
  };

  return (
    <div className="app">
      <Header openMenu={openMenu} menuBool={menuBool} />
      <Page />
      <Footer />
    </div>
  );
};

// == Export
export default App;
