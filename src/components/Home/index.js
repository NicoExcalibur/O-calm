import React from 'react';
import PropTypes from 'prop-types';

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
  console.log(currentUser);
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
