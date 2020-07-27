import {
  SAVE_VIDEOS,
  SAVE_SEARCH,
  SAVE_CATEGORIES,
  SAVE_AUTHORS,
  SAVE_DURATIONS,
  SAVE_COMPARE,
  SAVE_SELECT,
  SAVE_RESEARCH,
  RESULT_RESEARCH,
} from 'src/actions/videos';

const initialState = {
  videos: [],
  categories: [],
  durations: [],
  authors: [],
  searchValue: '',
  compare: [],
  select: [],
  research: [],
  researchResult: [],
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

    case SAVE_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };

    case SAVE_AUTHORS:
      return {
        ...state,
        authors: action.authors,
      };

    case SAVE_DURATIONS:
      return {
        ...state,
        durations: action.durations,
      };

    case SAVE_COMPARE:
      return {
        ...state,
        compare: action.compare,
      };

    case SAVE_SELECT:
      return {
        ...state,
        select: action.value,
      };

    case SAVE_RESEARCH:
      return {
        ...state,
        research: action.research,
      };

    case RESULT_RESEARCH:
      return {
        ...state,
        researchResult: action.researchResult,
      };

    default: return state;
  }
};

export default videos;
