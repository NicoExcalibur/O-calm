export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const SAVE_VIDEOS = 'SAVE_VIDEOS';
export const SAVE_SEARCH = 'SAVE_SEARCH';

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
