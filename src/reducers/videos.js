import { SAVE_VIDEOS, SAVE_SEARCH } from 'src/actions/videos';

const initialState = {
  videos: [],
  searchValue: '',
};

const videos = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_VIDEOS:
      return {
        ...state,
        videos: action.videos,
      };

    case SAVE_SEARCH:
      return {
        ...state,
        searchValue: action.value,
      };

    default: return state;
  }
};

export default videos;
