import React from 'react';

import Media from './Media';

import './slideMedia.scss';

const SlideMedia = () => (
  <div className="slide-media">
    <h1 className="category">Catégorie</h1>
    <div className="container">
      <Media />
      <Media />
      <Media />
      <Media />
      <Media />
      <Media />
    </div>
  </div>
);

export default SlideMedia;
