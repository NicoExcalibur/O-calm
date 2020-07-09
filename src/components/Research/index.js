import React from 'react';
import PropTypes from 'prop-types';

import Media from '../SlideMedia/Media';

import './research.scss';

const Research = ({ videos, categories, durations, authors }) => (
  <div className="research">
    <div className="input-research">
      <h2 className="research-title">Vous voulez rechercher par nom?</h2>
      <input type="search" placeholder="Rechercher..." />
      <h2 className="research-title">Ou vous voulez rechercher par catégorie et durée?</h2>
      <form className="filters">
        <select className="categories">
          <option value="">
            Choisissez une catégorie
          </option>
          {categories.map((category) => (
            <option value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <select className="duration">
          <option value="">
            Choisissez la durée de votre séance
          </option>
          {durations.map((duration) => (
            <option value={duration.id}>
              {duration.name}
            </option>
          ))}
        </select>
        <select className="author">
          <option value="">
            Choisissez l'auteur de votre choix
          </option>
          {authors.map((author) => (
            <option value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
        <button type="submit" className="submit-filters">
          Filtrer ma recherche
        </button>
      </form>
    </div>
    <div className="result-container">
      <h2 className="results">
        <em className="number">69</em> résultats trouvés
      </h2>
      <div className="medias-results">
        {videos.map((video) => (
          <Media key={video.id} video={video} />
        ))}
      </div>
    </div>
  </div>
);

Research.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  durations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Research;
