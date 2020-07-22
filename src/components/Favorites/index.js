import React from 'react';
import PropTypes from 'prop-types';

import { returnResults } from 'src/utils';

import Media from 'src/components/SlideMedia/Media';
import './favorites.scss';

const Favorites = ({
  videos,
  favorites,
  sendFavorites,
  addFavorite,
}) => {
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
          <Media key={video.id} favorites={favorites} sendFavorites={sendFavorites} addFavorite={addFavorite} video={video} />
        ))}
      </div>
    </div>
  );
};

Favorites.propTypes = {
  sendFavorites: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired,
  videos: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
};
export default Favorites;
