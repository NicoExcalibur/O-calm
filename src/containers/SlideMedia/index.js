import { connect } from 'react-redux';

import SlideMedia from 'src/components/SlideMedia';

const mapStateToProps = (state) => ({
  videos: state.videos.videos,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SlideMedia);
