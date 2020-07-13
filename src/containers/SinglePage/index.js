import { connect } from 'react-redux';

import SinglePage from 'src/components/SinglePage';

const mapStateToProps = (state) => ({
  videos: state.videos.videos,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage);
