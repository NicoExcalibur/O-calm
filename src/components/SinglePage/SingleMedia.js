import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@material-ui/core';

const SingleMedia = ({ source }) => {
  const matchesMobile = useMediaQuery('(max-width:600px)');
  const matchesMiddle = useMediaQuery('(max-width:800px');

  if (matchesMobile === true) {
    return (
      <div className="single-media">
        <ReactPlayer
          className="player"
          url={source}
          width={300}
          height={200}
        />
      </div>
    );
  } if (matchesMiddle === true) {
    return (
      <div className="single-media">
        <ReactPlayer
          className="player"
          url={source}
          width={600}
          height={400}
        />
      </div>
    );
  }
  return (
    <div className="single-media">
      <ReactPlayer
        className="player"
        url={source}
        width={800}
        height={550}
      />
    </div>
  );
};

SingleMedia.propTypes = {
  source: PropTypes.string.isRequired,
};

export default SingleMedia;
