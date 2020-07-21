import { connect } from 'react-redux';

import Media from 'src/components/SlideMedia/Media';

const mapStateToProps = (state) => ({
  favorites: state.users.favorites,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Media);
