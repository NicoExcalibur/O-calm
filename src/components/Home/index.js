import React from 'react';
import PropTypes from 'prop-types';

import SlideMedia from 'src/containers/SlideMedia';

const Home = ({ videos }) => (
  <div className="home">
    {console.log(videos)}
    <SlideMedia {...videos} />
  </div>
);

Home.propTypes = {
  videos: PropTypes.array.isRequired,
};

export default Home;
