export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const SAVE_VIDEOS = 'SAVE_VIDEOS';

export const fetchVideos = () => ({
  type: FETCH_VIDEOS,
});

export const saveVideos = (videos) => ({
  type: SAVE_VIDEOS,
  videos,
});
