import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';
import videosMiddleware from 'src/middlewares/videosMiddleware';
import usersMiddleware from 'src/middlewares/usersMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    videosMiddleware,
    usersMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
