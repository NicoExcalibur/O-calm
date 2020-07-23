import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import { Heart } from 'react-feather';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { convertHTML, shortTitle } from 'src/utils';

import thumbnail from "src/assets/images/thumbnail.png";

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

  const title = convertHTML(video.title.rendered);

  return (
    <div className="media">
      <Heart className={cssClass} onClick={manageFavorites()} />
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
