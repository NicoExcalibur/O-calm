import React from 'react';
// import PropTypes from 'prop-types';

import SlideMedia from 'src/containers/SlideMedia';

const Home = ({ videos }) => (
  <div className="home">
    {/* eslint-disable-next-line prefer-template */}
    {console.log(videos)}
    <SlideMedia {...videos} />
  </div>
);

// Home.propTypes = {
//   videos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.object.isRequired,
//     }).isRequired,
//   ).isRequired,
// };

export default Home;
