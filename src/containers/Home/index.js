import { connect } from 'react-redux';

import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  videos: state.videos.videos,
  categories: state.videos.categories,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
