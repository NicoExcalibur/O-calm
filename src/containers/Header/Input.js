import { connect } from 'react-redux';

import Input from 'src/components/Header/Input';
import { saveSearch, saveCompare } from 'src/actions/videos';

const mapStateToProps = (state) => ({
  searchValue: state.videos.searchValue,
  videos: state.videos.videos,
  users: state.users.users,
});

const mapDispatchToProps = (dispatch) => ({
  saveSearch: (value) => {
    dispatch(saveSearch(value));
  },
  saveCompare: (compare) => {
    dispatch(saveCompare(compare));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
