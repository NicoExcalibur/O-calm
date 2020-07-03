import React from 'react';
import { Search } from 'react-feather';

const Input = () => (
  <div className="input">
    <input
      type="search"
      className="search-home"
      placeholder="Rechercher un media"
    />
    <Search />
  </div>
);

export default Input;
