import React from 'react';
import PropTypes from 'prop-types';

import Media from 'src/containers/SlideMedia/Media';

import './slideMedia.scss';

const SlideMedia = ({ videos }) => (
  <div className="slide-media">
    {/* eslint-disable-next-line prefer-template */}
    {console.log('consolelog de ' + videos.id + ' dans SlideMedia')}
    <h1 className="category">Catégorie</h1>
    <div className="container">
      {videos.map((video) => (
        <Media key={video.id} video={videos} />
      ))}
    </div>
  </div>
);

SlideMedia.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SlideMedia;
