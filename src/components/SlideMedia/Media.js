import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { Heart } from 'react-feather';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { convertHTML, shortTitle } from 'src/utils';

import thumbnail from "src/assets/images/thumbnail.png";

import './media.scss';

const Media = ({
  video,
  favorites,
  addFavorite,
  sendFavorites,
  importFavorites,
  deleteFavorite,
}) => {
  let isFavorite = false;
  if (favorites.length > 0) {
    favorites.forEach((favorite) => {
      if (video.id === favorite.ID) {
        isFavorite = true;
      }
    });
  }
  let cssClass = classNames('fav', {
    'fav--is-favorite': isFavorite,
  });

  const manageFavorites = () => {
    if (isFavorite === true) {
      cssClass = 'fav fav--is-favorite';
    } if (isFavorite === false) {
      cssClass = 'fav';
    }
    addFavorite(video.id);
    if (isFavorite === true) {
      deleteFavorite();
    } if (isFavorite === false) {
      sendFavorites();
    }
    importFavorites();
  };

  const title = convertHTML(video.title.rendered);

  return (
    <div className="media">
      <Heart className={cssClass} onClick={manageFavorites} />
      <ReactPlayer
        className="react-player"
        url={video.content.rendered}
        light={thumbnail}
        width={200}
        height={120}
        {...video}
      />
       <h3>{shortTitle(title)}</h3>
      <NavLink
        className="play"
        to={`/player/${video.slug}`}
        exact
      >
        <span>Lire la vidéo</span>
      </NavLink>
    </div>
  );
};

Media.propTypes = {
  deleteFavorite: PropTypes.func.isRequired,
  importFavorites: PropTypes.func.isRequired,
  sendFavorites: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
  video: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }),
    content: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }),
    excerpt: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Media;
