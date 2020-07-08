import { connect } from 'react-redux';

import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  videos: state.videos.videos,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
