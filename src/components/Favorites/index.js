import React from 'react';
import PropTypes from 'prop-types';

import { returnResults } from 'src/utils';

import Media from 'src/components/SlideMedia/Media';
import './favorites.scss';

const Favorites = ({ videos, favorites }) => {
  const favoriteMedia = [];
  const compareFavorites = () => {
    videos.forEach((video) => {
      favorites.forEach((favorite) => {
        if (video.id === favorite.ID) {
          favoriteMedia.push(video);
        }
      });
    });
  };
  compareFavorites();
  console.log(favoriteMedia);
  return (
    <div className="favorites">
      <h1>Mes favoris</h1>
      <p className="counter">
        <em className="number">
          {returnResults(favorites)}
        </em> favoris
      </p>
      <div className="media-container">
        {favoriteMedia.map((video) => (
          <Media key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

Favorites.propTypes = {
  videos: PropTypes.array.isRequired,
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      ID: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Favorites;
