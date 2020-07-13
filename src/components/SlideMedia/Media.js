import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
// import { PlayCircle } from 'react-feather';
import { NavLink } from 'react-router-dom';

import './media.scss';

const Media = ({ video }) => (
  <div className="media">
    <NavLink
      className="play"
      to={`/player/${video.slug}`}
      exact
    >
      <ReactPlayer
        className="react-player"
        url={video.content.rendered}
        width={200}
        height={120}
        {...video}
      />
      <h3>{video.title.rendered}</h3>
    </NavLink>
  </div>
);

Media.propTypes = {
  video: PropTypes.shape({
    slug: PropTypes.string.isRequired,
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
};

export default Media;
