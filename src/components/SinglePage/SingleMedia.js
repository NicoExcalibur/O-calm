import React from 'react';
import ReactPlayer from 'react-player';
import { useMediaQuery } from '@material-ui/core';

const SingleMedia = () => {
  const matchesMobile = useMediaQuery('(max-width:600px)');
  const matchesMiddle = useMediaQuery('(max-width:800px');

  if (matchesMobile === true) {
    return (
      <div className="single-media">
        <ReactPlayer
          className="player"
          url="https://www.youtube.com/watch?v=HlBYdiXdUa8"
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
          url="https://www.youtube.com/watch?v=HlBYdiXdUa8"
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
        url="https://www.youtube.com/watch?v=HlBYdiXdUa8"
        width={800}
        height={550}
      />
    </div>
  );
};

export default SingleMedia;

