import React from 'react';
import PropTypes from 'prop-types';
import { Search } from 'react-feather';
import { useHistory } from 'react-router-dom';

import { setSearch } from 'src/utils';

const Input = ({
  searchValue,
  saveSearch,
  videos,
  saveCompare,
}) => {
  const history = useHistory();
  return (
    <form
      className="input"
      onSubmit={(event) => {
        event.preventDefault();
        saveCompare(setSearch(searchValue, videos));
        history.push('/research');
        saveSearch('');
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
};

Input.propTypes = {
  videos: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
  saveSearch: PropTypes.func.isRequired,
  saveCompare: PropTypes.func.isRequired,
};

export default Input;
