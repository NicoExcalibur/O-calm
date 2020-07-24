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
  importFavorites,
  deleteFavorite,
}) => {
  const favoriteMedia = [];
  const compareFavorites = () => {
    if (favorites.length > 0) {
      videos.forEach((video) => {
        favorites.forEach((favorite) => {
          if (video.id === favorite.ID) {
            favoriteMedia.push(video);
          }
        });
      });
    }
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
          <Media
            key={video.id}
            importFavorites={importFavorites}
            deleteFavorite={deleteFavorite}
            favorites={favorites}
            sendFavorites={sendFavorites}
            addFavorite={addFavorite}
            video={video}
          />
        ))}
      </div>
    </div>
  );
};

Favorites.propTypes = {
  deleteFavorite: PropTypes.func.isRequired,
  importFavorites: PropTypes.func.isRequired,
  sendFavorites: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired,
  videos: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
};
export default Favorites;
