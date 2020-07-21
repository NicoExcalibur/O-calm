import React from 'react';
import PropTypes from 'prop-types';

import Media from 'src/components/SlideMedia/Media';
import './favorites.scss';

const Favorites = ({ videos }) => (
  <div className="favorites">
    <h1>Mes favoris</h1>
    <p className="counter"><em className="number">0</em> favoris</p>
    <div className="media-container">
      {/* {videos.map((video) => (
        <Media key={video.id} video={video} />
      ))} */}
    </div>
  </div>
);

Favorites.propTypes = {
  videos: PropTypes.array.isRequired,
};
export default Favorites;
