import { connect } from 'react-redux';

import { addFavorite, sendFavorites } from 'src/actions/users';

import Media from 'src/components/SlideMedia/Media';

const mapStateToProps = (state) => ({
  favorites: state.users.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  addFavorite: (addFav) => {
    dispatch(addFavorite(addFav));
  },
  sendFavorites: (addFav) => {
    dispatch(sendFavorites(addFav));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Media);
