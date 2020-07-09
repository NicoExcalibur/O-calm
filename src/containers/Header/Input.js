import { connect } from 'react-redux';

import Input from 'src/components/Header/Input';
import { saveSearch } from 'src/actions/videos';

const mapStateToProps = (state) => ({
  searchValue: state.videos.searchValue,
});

const mapDispatchToProps = (dispatch) => ({
  saveSearch: (value) => {
    dispatch(saveSearch(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
