import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Heart } from 'react-feather';

import classNames from 'classnames';
import SingleMedia from './SingleMedia';
import './singlePage.scss';
import { convertHTML } from '../../utils';

const SinglePage = ({
  videos,
  favorites,
  addFavorite,
  sendFavorites,
  importFavorites,
  deleteFavorite,
}) => {
  const { slug } = useParams();
  let videoTitle;
  let videoContent;
  let videoExcerpt;
  let videoAuthor;
  let videoId;
  videos.map((value) => {
    if (slug === value.slug) {
      videoTitle = convertHTML(value.title.rendered);
      videoExcerpt = convertHTML(value.excerpt.rendered);
      videoAuthor = value.auteur;
      videoId = value.id;
      videoContent = value.content.rendered;
    }
  });

  let isFavorite = false;
  if (favorites.length > 0) {
    favorites.forEach((favorite) => {
      if (videoId === favorite.ID) {
        isFavorite = true;
      }
    });
  }
  let cssClass = classNames('fav', {
    'fav--is-favorite': isFavorite,
  });

  const manageFavorites = () => {
    if (isFavorite === true) {
      deleteFavorite();
      cssClass = 'fav fav--is-favorite';
    } if (isFavorite === false) {
      sendFavorites();
      cssClass = 'fav';
    }
    addFavorite(videoId);
    importFavorites();
  };

  return (
    <div className="single-page">
      <SingleMedia source={videoContent} />
      <div className="media-infos">
        <h1 className="title">
          {videoTitle}
        </h1>
        <h2 className="author">
          {videoAuthor}
        </h2>
        <p className="description">
          {videoExcerpt}
        </p>
        <Heart className={cssClass} onClick={manageFavorites} size={30} />
      </div>
    </div>
  );
};

SinglePage.propTypes = {
  videos: PropTypes.array.isRequired,
  deleteFavorite: PropTypes.func.isRequired,
  importFavorites: PropTypes.func.isRequired,
  sendFavorites: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
};

export default SinglePage;
