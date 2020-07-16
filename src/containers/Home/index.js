import { connect } from 'react-redux';

import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  videos: state.videos.videos,
  categories: state.videos.categories,
  users: state.users.users,
  token: state.users.token,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
