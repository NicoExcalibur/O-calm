import React from 'react';
import PropTypes from 'prop-types';

import SlideMedia from 'src/containers/SlideMedia';

const Home = ({ videos }) => (
  <div className="home">
    {/* eslint-disable-next-line prefer-template */}
    {console.log('consolelog de ' + videos.type + ' dans Home')}
    <SlideMedia key={videos.id} videos={videos} />
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
