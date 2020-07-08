import { SAVE_VIDEOS } from 'src/actions/videos';

const initialState = {
  videos: [],
};

const videos = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_VIDEOS:
      return {
        ...state,
        videos: action.videos,
      };
    default: return state;
  }
};

export default videos;
