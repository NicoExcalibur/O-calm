// == Import npm
import React, { useState } from 'react';

import Header from '../Header';
import SlideMedia from '../SlideMedia';
import Footer from '../Footer';
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
      <SlideMedia />
      <SlideMedia />
      <SlideMedia />
      <Footer />
    </div>
  );
};

// == Export
export default App;
