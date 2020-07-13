export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const SAVE_VIDEOS = 'SAVE_VIDEOS';
export const SAVE_SEARCH = 'SAVE_SEARCH';
export const FETCH_AUTHORS = 'FETCH_AUTHORS';
export const SAVE_AUTHORS = 'SAVE_AUTHORS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const FETCH_DURATIONS = 'FETCH_DURATIONS';
export const SAVE_DURATIONS = 'SAVE_DURATIONS';
export const SAVE_COMPARE = 'SAVE_COMPARE';

export const fetchVideos = () => ({
  type: FETCH_VIDEOS,
});

export const saveVideos = (videos) => ({
  type: SAVE_VIDEOS,
  videos,
});

export const saveSearch = (value) => ({
  type: SAVE_SEARCH,
  value,
});

export const fetchAuthors = () => ({
  type: FETCH_AUTHORS,
});

export const saveAuthors = (authors) => ({
  type: SAVE_AUTHORS,
  authors,
});

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

export const saveCategories = (categories) => ({
  type: SAVE_CATEGORIES,
  categories,
});

export const fetchDurations = () => ({
  type: FETCH_DURATIONS,
});

export const saveDurations = (durations) => ({
  type: SAVE_DURATIONS,
  durations,
});

export const saveCompare = (compare) => ({
  type: SAVE_COMPARE,
  compare,
});
