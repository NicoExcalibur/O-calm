import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';
import videosMiddleware from 'src/middlewares/videosMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    videosMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
