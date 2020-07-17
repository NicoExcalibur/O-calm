import React from 'react';
import PropTypes from 'prop-types';

import { getRandomValue } from 'src/utils';

import SlideMedia from 'src/containers/SlideMedia';

const Home = ({
  videos,
  categories,
  users,
  token,
  currentUser,
  setUser,
}) => {
  const arrayCompare = () => {
    users.forEach((user) => {
      console.log(user);
      if (user.name == token.user_nicename) {
        setUser(user);
      }
    });
  };
  arrayCompare();
  const firstSlide = getRandomValue(categories);
  const secondSlide = getRandomValue(categories);
  const thirdSlide = getRandomValue(categories);
  console.log(getRandomValue(categories));
  console.log(getRandomValue(categories));
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

      {/* {categories.map((category) => (
        <SlideMedia
          key={category.id}
          categoryId={category.id}
          title={category.name}
          {...videos}
        />
      ))} */}
    </div>
  );
};

Home.propTypes = {
  videos: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  token: PropTypes.object.isRequired,
  currentUser: PropTypes.array.isRequired,
  setUser: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Home;
