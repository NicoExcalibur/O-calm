import React from 'react';
import ReactPlayer from 'react-player';
import { useMediaQuery } from '@material-ui/core';

const SingleMedia = () => {
  const matchesMobile = useMediaQuery('(max-width:600px)');

  if (matchesMobile === true) {
    return (
      <div className="single-media">
        <ReactPlayer
          className="player"
          url="https://www.youtube.com/watch?v=HlBYdiXdUa8"
          width={500}
          height={300}
        />
      </div>
    );
  }
  return (
    <div className="single-media">
      <ReactPlayer
        className="player"
        url="https://www.youtube.com/watch?v=HlBYdiXdUa8"
        width={800}
        height={600}
      />
    </div>
  );
};

export default SingleMedia;
