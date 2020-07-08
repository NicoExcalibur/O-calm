import axios from 'axios';

import { FETCH_VIDEOS } from 'src/actions/videos';

const videosMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_VIDEOS: {
      axios.get('http://ec2-100-25-192-123.compute-1.amazonaws.com/o-calm/wp-json/wp/v2/video')
        .then((response) => {
          console.log(response.data);
        })
        .then((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default videosMiddleware;
