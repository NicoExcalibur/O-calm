import React from 'react';
import PropTypes from 'prop-types';

import Media from '../SlideMedia/Media';

import './research.scss';

const Research = ({ videos }) => (
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
          <option value="meditation">
            Méditation
          </option>
          <option value="yoga">
            Yoga
          </option>
          <option value="nature-sounds">
            Sons de la nature
          </option>
        </select>
        <select className="duration">
          <option value="">
            Choisissez la durée de votre séance
          </option>
          <option value="short">
            Courte
          </option>
          <option value="medium">
            Moyenne
          </option>
          <option value="long">
            Longue
          </option>
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
};

export default Research;
