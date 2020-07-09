import axios from 'axios';

import {
  FETCH_VIDEOS,
  saveVideos,
  FETCH_CATEGORIES,
  saveCategories,
  FETCH_AUTHORS,
  saveAuthors,
  FETCH_DURATIONS,
  saveDurations,
} from 'src/actions/videos';

const videosMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_VIDEOS: {
      axios.get('http://ec2-100-25-192-123.compute-1.amazonaws.com/o-calm/wp-json/wp/v2/video')
        .then((response) => {
          store.dispatch(saveVideos(response.data));
        })
        .then((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    case FETCH_CATEGORIES: {
      axios.get('http://ec2-100-25-192-123.compute-1.amazonaws.com/o-calm/wp-json/wp/v2/video_categorie')
        .then((response) => {
          store.dispatch(saveCategories(response.data));
        })
        .then((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    case FETCH_AUTHORS: {
      axios.get('http://ec2-100-25-192-123.compute-1.amazonaws.com/o-calm/wp-json/wp/v2/video_auteur')
        .then((response) => {
          store.dispatch(saveAuthors(response.data));
        })
        .then((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    case FETCH_DURATIONS: {
      axios.get('http://ec2-100-25-192-123.compute-1.amazonaws.com/o-calm/wp-json/wp/v2/video_duree')
        .then((response) => {
          store.dispatch(saveDurations(response.data));
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
