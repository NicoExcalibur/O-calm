import React from 'react';

import Media from 'src/components/SlideMedia/Media';
import './favorites.scss';

const Favorites = () => (
  <div className="favorites">
    <h1>Mes favoris</h1>
    <p className="counter"><em className="number">220</em> favoris</p>
    <div className="media-container">
      <Media />
      <Media />
      <Media />
      <Media />
      <Media />
      <Media />
      <Media />
      <Media />
      <Media />
      <Media />
      <Media />
      <Media />
      <Media />
      <Media />
    </div>
  </div>
);

export default Favorites;
