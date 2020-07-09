import React from 'react';
import PropTypes from 'prop-types';
import { Search } from 'react-feather';

import { setSearch } from 'src/utils';

const Input = ({ searchValue, saveSearch, videos }) => (
  <form
    className="input"
    onSubmit={(event) => {
      event.preventDefault();
      console.log(setSearch(searchValue, videos));
    }}
  >
    <input
      type="search"
      className="search-home"
      placeholder="Rechercher un media"
      value={searchValue}
      onChange={(event) => {
        saveSearch(event.currentTarget.value);
        console.log(videos.video);
      }}
    />
    <Search className="search" />
  </form>
);

Input.propTypes = {
  searchValue: PropTypes.string.isRequired,
  saveSearch: PropTypes.func.isRequired,
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      video: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.shape({
            rendered: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
};

export default Input;
