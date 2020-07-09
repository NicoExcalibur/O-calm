import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

import './slideMedia.scss';

const Media = ({ video }) => (
  <div className="media">
    {/* eslint-disable-next-line prefer-template */}
    {console.log(video)}
    {console.log(video.title.rendered)}
    <ReactPlayer
      className="react-player"
      url={video.content.rendered}
      width={200}
      height={120}
    />
    <h3>{video.title.rendered}</h3>
  </div>
);

Media.propTypes = {
  video: PropTypes.shape({
    title: PropTypes.shape({
      rendered: PropTypes.object.isRequired,
    }),
    content: PropTypes.shape({
      rendered: PropTypes.object.isRequired,
    }),
    excerpt: PropTypes.shape({
      rendered: PropTypes.object.isRequired,
    }),
  }).isRequired,
};

export default Media;
