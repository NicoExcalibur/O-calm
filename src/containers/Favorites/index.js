import { connect } from 'react-redux';

import Favorites from 'src/components/Favorites';

const mapStateToProps = (state) => ({
  videos: state.videos.videos,
});

const mapDispatchToProps = () => ({
  // caca
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
