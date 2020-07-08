import { connect } from 'react-redux';

import { fetchVideos } from 'src/actions/videos';

import App from 'src/components/App';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => {
    dispatch(fetchVideos());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
