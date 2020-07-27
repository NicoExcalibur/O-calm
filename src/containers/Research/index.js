import { connect } from 'react-redux';

import Research from 'src/components/Research';
import {
  saveSearch,
  saveCompare,
  saveSelect,
  saveResearch,
  sendResearch,
} from 'src/actions/videos';
import {
  addFavorite,
  sendFavorites,
  importFavorites,
  deleteFavorite,
} from 'src/actions/users';

const mapStateToProps = (state) => ({
  videos: state.videos.videos,
  categories: state.videos.categories,
  durations: state.videos.durations,
  authors: state.videos.authors,
  compare: state.videos.compare,
  searchValue: state.videos.searchValue,
  select: state.videos.select,
  favorites: state.users.favorites,
  researchResult: state.videos.researchResult,
});

const mapDispatchToProps = (dispatch) => ({
  saveSearch: (value) => {
    dispatch(saveSearch(value));
  },
  saveCompare: (compare) => {
    dispatch(saveCompare(compare));
  },
  saveSelect: (value) => {
    dispatch(saveSelect(value));
  },
  addFavorite: (addFav) => {
    dispatch(addFavorite(addFav));
  },
  sendFavorites: (addFav) => {
    dispatch(sendFavorites(addFav));
  },
  importFavorites: () => {
    dispatch(importFavorites());
  },
  deleteFavorite: () => {
    dispatch(deleteFavorite());
  },
  saveResearch: (research) => {
    dispatch(saveResearch(research));
  },
  sendResearch: () => {
    dispatch(sendResearch());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Research);
