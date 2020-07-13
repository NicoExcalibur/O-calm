import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import SingleMedia from './SingleMedia';
import './singlePage.scss';

const SinglePage = ({ videos }) => {
  const { slug } = useParams();
  let video;
  let videoTitle;
  let videoContent;
  let videoExcerpt;
  let videoAuthor;
  let videoDuration;
  videos.map((value) => {
    if (slug === value.slug) {
      video = value;
      videoTitle = video.title.rendered;
      videoExcerpt = video.excerpt.rendered;
      videoAuthor = video.auteur;
      videoDuration = video.duree;
      videoContent = video.content.rendered;
    }
  });

  return (
    <div className="single-page">
      <SingleMedia source={videoContent} />
      <div className="media-infos">
        <h1 className="title">
          {videoTitle}
        </h1>
        <div className="categories">
          <h3 className="category">
            #méditation
          </h3>
          <h3 className="category">
            #méditation-guidée
          </h3>
        </div>
        <h2 className="author">
          {videoAuthor}
        </h2>
        <p className="description">
          {videoExcerpt}
        </p>
      </div>
      <button type="button" className="fav">Ajouter à mes favoris</button>
    </div>
  );
};

SinglePage.propTypes = {
  videos: PropTypes.array.isRequired,
};

export default SinglePage;
