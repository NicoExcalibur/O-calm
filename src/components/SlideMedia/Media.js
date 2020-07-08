import React from 'react';
import PropTypes from 'prop-types';

import './slideMedia.scss';

const Media = ({ video }) => (
  <div className="media">
    <div className="miniature">
      {video.content}
    </div>
    <h3>{video.title}</h3>
    <h4>{video.excerpt}</h4>
  </div>
);

Media.propTypes = {
  video: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.objectOf(
        PropTypes.shape({
          rendered: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
      content: PropTypes.objectOf(
        PropTypes.shape({
          rendered: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
      excerpt: PropTypes.objectOf(
        PropTypes.shape({
          rendered: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
};

export default Media;
