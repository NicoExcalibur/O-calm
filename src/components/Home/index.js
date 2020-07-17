import React from 'react';
import PropTypes from 'prop-types';

import SlideMedia from 'src/containers/SlideMedia';

const Home = ({
  videos,
  categories,
  users,
  token,
}) => {
  const userArray = [];
  const arrayCompare = () => {
    users.forEach((user) => {
      console.log(user);
      if (user.name == token.user_nicename) {
        userArray.push(user);
      }
    });
  };
  arrayCompare();
  console.log(userArray);
  console.log(users);
  return (
    <div className="home">
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
  videos: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  token: PropTypes.object.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Home;
