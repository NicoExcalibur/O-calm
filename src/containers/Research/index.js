import { connect } from 'react-redux';

import Research from 'src/components/Research';
import { saveSearch, saveCompare } from 'src/actions/videos';

const mapStateToProps = (state) => ({
  videos: state.videos.videos,
  categories: state.videos.categories,
  durations: state.videos.durations,
  authors: state.videos.authors,
  compare: state.videos.compare,
  searchValue: state.videos.searchValue,
});

const mapDispatchToProps = (dispatch) => ({
  saveSearch: (value) => {
    dispatch(saveSearch(value));
  },
  saveCompare: (compare) => {
    dispatch(saveCompare(compare));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Research);
