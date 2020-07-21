import { connect } from 'react-redux';

import Favorites from 'src/components/Favorites';

const mapStateToProps = (state) => ({
  videos: state.videos.videos,
  favorites: state.users.favorites,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
