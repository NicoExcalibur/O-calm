import React from 'react';
import PropTypes from 'prop-types';

import SingleMedia from './SingleMedia';
import './singlePage.scss';

const SinglePage = () => (
  <div className="single-page">
    <SingleMedia />
    <div className="media-infos">
      <h1 className="title">
        titre de tes morts
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
        Jean-Jacques Goldman
      </h2>
      <p className="description">
        T'es din patate mon gars, complètement dans le champ. Toryeu que c'est cheap cette esti de
        cochonnerie-là. Les crottes de fromage, bien sqouick sqouick dans yeule, c'est ça le
        bonheur.
        Heille les ti-culs, vous er'virez de bord drette là si vous pensez que vous vous écartez
        dans
        le bois talheure. Il m'a même pas redonné mon ptit change, ya essayé de me crosser le
        câlice.
        Je crisse mon camp d'icite anyway, je déguedine au plus sacrant, ça sent la cibole de marde.

        Yé un peu niaiseux le niochon de voisin, il crisse eu'rien avec sa vie. Quessé tu veux j'te
        dise sacrament, fouille-moé bout d'viarge, je le sais-tu moé. Osti qui fa frette. J'ai
        finalement pogné la twist pour faire la poutine. Je lui ai garôché une estie de garnotte en
        plein dans sa crisse de face de crosseur, il en menait pas large je te jure. Lâche pas la
        patate, enwoye, tu rentres la gogosse dans la slot pis ça va le faire.
      </p>
    </div>
    <button type="button" className="fav">Ajouter à mes favoris</button>
  </div>
);

SinglePage.propTypes = {
  video: PropTypes.shape({
    title: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }),
    video_category: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    content: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }),
    excerpt: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default SinglePage;
