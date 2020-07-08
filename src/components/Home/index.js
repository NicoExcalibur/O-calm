import React from 'react';
import PropTypes from 'prop-types';

import SlideMedia from '../SlideMedia';

const Home = ({ videos }) => (
  <div className="home">
    {console.log(videos)}
    <SlideMedia key={videos.id} {...videos} />
  </div>
);

Home.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Home;
