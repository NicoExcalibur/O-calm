import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { getRandomValue } from 'src/utils';

import SlideMedia from 'src/containers/SlideMedia';

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
      if (user.name == token.user_nicename) {
        setUser(user);
      }
    });
  };
  arrayCompare();
  const firstSlide = getRandomValue(categories);
  let secondSlide = getRandomValue(categories);
  let thirdSlide = getRandomValue(categories);
  const slideFunc = () => {
    if (firstSlide.id === secondSlide.id) {
      secondSlide = getRandomValue(categories);
    } if (secondSlide.id === thirdSlide.id || thirdSlide.id === firstSlide.id) {
      thirdSlide = getRandomValue(categories);
    }
  };
  useEffect(() => {
    userProfile();
    importFavorites();
  }, []);
  slideFunc();
  return (
    <div className="home">
      <SlideMedia
        key={firstSlide.id}
        categoryId={firstSlide.id}
        title={firstSlide.name}
        {...videos}
      />
      <SlideMedia
        key={secondSlide.id}
        categoryId={secondSlide.id}
        title={secondSlide.name}
        {...videos}
      />
      <SlideMedia
        key={thirdSlide.id}
        categoryId={thirdSlide.id}
        title={thirdSlide.name}
        {...videos}
      />
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
