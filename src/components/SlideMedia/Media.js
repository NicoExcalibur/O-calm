import React from 'react';
import PropTypes from 'prop-types';

import './slideMedia.scss';

const Media = ({ video }) => (
  <div className="media">
    {/* eslint-disable-next-line prefer-template */}
    {console.log(video)}
    {console.log(video.title)}
    <div className="miniature">
      {video.content}
    </div>
    <h3>{video.title}</h3>
    <h4>{video.excerpt}</h4>
  </div>
);

Media.propTypes = {
  video: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.shape({
        rendered: PropTypes.string.isRequired,
      }),
      content: PropTypes.shape({
        rendered: PropTypes.string.isRequired,
      }),
      excerpt: PropTypes.shape({
        rendered: PropTypes.string.isRequired,
      }),
    }).isRequired,
  ).isRequired,
};

export default Media;
