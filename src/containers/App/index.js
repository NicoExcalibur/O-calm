import { connect } from 'react-redux';

import {
  fetchVideos,
  fetchCategories,
  fetchAuthors,
  fetchDurations,
} from 'src/actions/videos';

import App from 'src/components/App';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => {
    dispatch(fetchVideos());
  },
  fetchCategories: () => {
    dispatch(fetchCategories());
  },
  fetchAuthors: () => {
    dispatch(fetchAuthors());
  },
  fetchDurations: () => {
    dispatch(fetchDurations());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
