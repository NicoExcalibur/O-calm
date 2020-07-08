import { connect } from 'react-redux';

import Media from 'src/components/SlideMedia/Media';

const mapStateToProps = (state) => ({
  videos: state.videos.videos,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Media);
