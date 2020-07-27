import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import SlideMedia from 'src/containers/SlideMedia';
import './home.scss';

const Home = ({
  videos,
  categories,
  users,
  token,
  setUser,
  importFavorites,
  userProfile,
}) => {
  const arrayCompare = () => {
    users.forEach((user) => {
      if (user.name === token.user_nicename) {
        setUser(user);
      }
    });
  };
  arrayCompare();
  useEffect(() => {
    userProfile();
    importFavorites();
  }, []);
  return (
    <div className="home">
      <h1 className="hey">Qu'allez-vous écouter aujourd'hui <em>{token.user_nicename}</em> ?</h1>
      {categories.map((category) => (
        <SlideMedia
          key={category.id}
          categoryId={category.id}
          title={category.name}
          {...videos}
        />
      ))}
    </div>
  );
};

Home.propTypes = {
  importFavorites: PropTypes.func.isRequired,
  userProfile: PropTypes.func.isRequired,
  videos: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  token: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Home;
