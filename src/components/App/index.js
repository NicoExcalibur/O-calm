// == Import npm
import React from 'react';

import Header from '../Header';
import SlideMedia from '../SlideMedia';
import Footer from '../Footer';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <SlideMedia />
    <Footer />
  </div>
);

// == Export
export default App;
