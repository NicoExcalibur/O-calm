import { connect } from 'react-redux';

import Research from 'src/components/Research';

const mapStateToProps = (state) => ({
  videos: state.videos.videos,
  categories: state.videos.categories,
  durations: state.videos.durations,
  authors: state.videos.authors,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Research);
