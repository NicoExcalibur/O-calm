import { SAVE_VIDEOS } from 'src/actions/videos';

const initialState = {
  videos: [
    {
      id: 33,
      title: {
        rendered: 'Coucou',
      },
      content: {
        rendered: 'hello il fait beau',
      },
      excerpt: {
        rendered: 'Si tu marches pas je te lances par la fenêtre',
      },
    },
    {
      id: 34,
      title: {
        rendered: 'Coucou',
      },
      content: {
        rendered: 'hello il fait beau',
      },
      excerpt: {
        rendered: 'Si tu marches pas je te lances par la fenêtre',
      },
    },
  ],
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
