import React from 'react';
import PropTypes from 'prop-types';
import Media from './Media';

import './slideMedia.scss';

const SlideMedia = ({ videos, title, categoryId }) => {
  const videoArray = [];
  const goodArray = (value) => {
    value.map((video) => {
      video.video_categorie.forEach((element) => {
        if (categoryId === element) {
          videoArray.push(video);
        }
      });
    });
  };
  goodArray(videos);

  return (
    <div className="slide-media">
      <h1 className="category">{title}</h1>
      <div className="container">
        {videoArray.map((video) => (
          <Media key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

SlideMedia.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      video_categorie: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
  title: PropTypes.string.isRequired,
  categoryId: PropTypes.number.isRequired,
};

export default SlideMedia;
