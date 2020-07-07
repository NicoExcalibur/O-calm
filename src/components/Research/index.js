import React from 'react';

import Media from '../SlideMedia/Media';

import './research.scss';

const Research = () => (
  <div className="research">
    <div className="input-research">
      <input type="search" placeholder="Rechercher..." />
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
        22 000 résultats trouvés
      </h2>
      <Media />
      <Media />
      <Media />
      <Media />
    </div>
  </div>
);

export default Research;
