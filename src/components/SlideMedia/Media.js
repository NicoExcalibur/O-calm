import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import { Play, Heart } from 'react-feather';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import './media.scss';

const Media = ({ video, favorites }) => {
  let isFavorite = false;
  favorites.forEach((favorite) => {
    if (video.id === favorite.ID) {
      isFavorite = true;
    }
  });
  const cssClass = classNames('fav', {
    'fav--is-favorite': isFavorite,
  });
  const manageFavorites = () => {
    if (isFavorite === false) {
      isFavorite = true;
    } if (isFavorite === true) {
      isFavorite = false;
    }
  };

  return (
    <div className="media">
      <Heart className={cssClass} onClick={manageFavorites()} />
      <ReactPlayer
        className="react-player"
        url={video.content.rendered}
        width={200}
        height={120}
        {...video}
      />
      <NavLink
        className="play"
        to={`/player/${video.slug}`}
        exact
      >
        <Play className="icon" size={40} />
      </NavLink>
      <h3>{video.title.rendered}</h3>
    </div>
  );
};

Media.propTypes = {
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
