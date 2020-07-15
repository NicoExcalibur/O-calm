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
  users,
}) => {
  console.log(users);
  const history = useHistory();
  return (
    <form
      className="input"
      onSubmit={(event) => {
        event.preventDefault();
        saveCompare(setSearch(searchValue, videos));
        history.push('/research');
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
  searchValue: PropTypes.string.isRequired,
  saveSearch: PropTypes.func.isRequired,
  saveCompare: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
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
