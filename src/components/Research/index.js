import React from 'react';
import PropTypes from 'prop-types';
import { Search } from 'react-feather';

import { returnResults, setSearch, researchVideoDisplay } from 'src/utils';
import Media from '../SlideMedia/Media';

import './research.scss';

const Research = ({
  categories,
  durations,
  authors,
  compare,
  searchValue,
  saveSearch,
  videos,
  saveCompare,
  saveSelect,
  select,
  favorites,
  sendFavorites,
  addFavorite,
  deleteFavorite,
  importFavorites,
}) => {
  let categoryId = '';
  let authorId = '';
  let durationId = '';
  let videoDisplay = researchVideoDisplay(compare, select);
  const provArray = [];
  const startResearch = () => {
    videos.map((video) => {
      video.video_categorie.forEach((element) => {
        if (categoryId == element) {
          provArray.push(video);
        } 
      });
      video.video_auteur.forEach((element) => {
        if (authorId == element) {
          provArray.push(video);
        }
      });
      video.video_duree.forEach((element) => {
        if (durationId == element) {
          provArray.push(video);
        }
      });
    });
    saveSelect(provArray);
  };

  return (
    <div className="research">
      <div className="input-research">
        <div className="bubble">
          <h2 className="research-title">Vous voulez rechercher par nom?</h2>
          <form
            className="input"
            onSubmit={(event) => {
              event.preventDefault();
              saveCompare(setSearch(searchValue, videos));
              let videoDisplay = compare;
            }}
          >
            <input
              type="search"
              className="search-home"
              placeholder="Rechercher un media"
              value={searchValue}
              onChange={(event) => {
                saveSearch(event.currentTarget.value);
              }}
            />
            <button type="submit" className="submit-search">
              <Search />
            </button>
          </form>
          <h2 className="research-title">Ou par catégorie, durée ou auteur?</h2>
          <form
            className="filters"
            onSubmit={(event) => {
              event.preventDefault();
              startResearch();
              let videoDisplay = select;
              console.log(select);
            }}
          >
            <select
              className="categories"
              onChange={(event) => {
                categoryId = event.currentTarget.value;
              }}
            >
              <option value="">
                Choisissez une catégorie
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <select
              className="duration"
              onChange={(event) => {
                durationId = event.currentTarget.value;
              }}
            >
              <option value="">
                Choisissez la durée de votre séance
              </option>
              {durations.map((duration) => (
                <option key={duration.id} value={duration.id}>
                  {duration.name}
                </option>
              ))}
            </select>
            <select
              className="author"
              onChange={(event) => {
                authorId = event.currentTarget.value;
              }}
            >
              <option value="">
                Choisissez l'auteur de votre choix
              </option>
              {authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </select>
            <button type="submit" className="submit-filters">
              Filtrer ma recherche
            </button>
          </form>
        </div>
      </div>
      <div className="result-container">
        <h2 className="results">
          <em className="number">
            {returnResults(videoDisplay)}
          </em>
          <br />
          résultats trouvés
        </h2>
        <div className="medias-results">
          {videoDisplay.map((video) => (
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
    </div>
  );
};

Research.propTypes = {
  importFavorites: PropTypes.func.isRequired,
  deleteFavorite: PropTypes.func.isRequired,
  sendFavorites: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
  saveSearch: PropTypes.func.isRequired,
  videos: PropTypes.array.isRequired,
  saveCompare: PropTypes.func.isRequired,
  saveSelect: PropTypes.func.isRequired,
  select: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  compare: PropTypes.arrayOf(
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
