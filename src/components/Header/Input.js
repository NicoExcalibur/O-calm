import React from 'react';
import PropTypes from 'prop-types';
import { Search } from 'react-feather';

const Input = ({ searchValue, saveSearch }) => (
  <form
    className="input"
    onSubmit={(event) => {
      event.preventDefault();
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
    <Search className="search" />
  </form>
);

Input.propTypes = {
  searchValue: PropTypes.string.isRequired,
  saveSearch: PropTypes.func.isRequired,
};

export default Input;
