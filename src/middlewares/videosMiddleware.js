/* eslint-disable prefer-destructuring */
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
  SEND_RESEARCH,
  resultResearch,
} from 'src/actions/videos';
import { getErrors } from 'src/actions/errors';
// ancienne URL, en fait ça change au niveau des chiffres :
// http://ec2-100-25-192-123.compute-1.amazonaws.com/o-calm/wp-json/wp/v2/
// maintenant on a ec2-100-26-220-146 . COMME PAR MAGIE

const apiUrl = 'http://ec2-100-26-220-146.compute-1.amazonaws.com/o-calm/wp-json/wp/v2';

const videosMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_VIDEOS: {
      axios.get(`${apiUrl}/video?per_page=100`)
        .then((response) => {
          store.dispatch(saveVideos(response.data));
        })
        .then((error) => {
          console.warn(error);
          store.dispatch(getErrors(error));
        });

      next(action);
      break;
    }

    case FETCH_CATEGORIES: {
      axios.get(`${apiUrl}/video_categorie`)
        .then((response) => {
          store.dispatch(saveCategories(response.data));
        })
        .then((error) => {
          console.warn(error);
          store.dispatch(getErrors(error));
        });

      next(action);
      break;
    }

    case FETCH_AUTHORS: {
      axios.get(`${apiUrl}/video_auteur`)
        .then((response) => {
          store.dispatch(saveAuthors(response.data));
        })
        .then((error) => {
          console.warn(error);
          store.dispatch(getErrors(error));
        });

      next(action);
      break;
    }

    case FETCH_DURATIONS: {
      axios.get(`${apiUrl}/video_duree?orderby=id`)
        .then((response) => {
          store.dispatch(saveDurations(response.data));
        })
        .then((error) => {
          console.warn(error);
          store.dispatch(getErrors(error));
        });

      next(action);
      break;
    }

    case SEND_RESEARCH: {
      const { research } = store.getState().videos;
      const category = research.category;
      const author = research.author;
      const duration = research.duration;
      axios.get(`${apiUrl}/video?video_categorie=${category}&video_auteur=${author}&video_duree=${duration}`)
        .then((response) => {
          store.dispatch(resultResearch(response.data));
        })
        .then((error) => {
          console.warn(error);
          store.dispatch(getErrors(error));
        });

      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default videosMiddleware;
