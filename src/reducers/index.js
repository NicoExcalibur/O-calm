import { combineReducers } from 'redux';

import videosReducer from './videos';
import usersReducer from './users';

const rootReducer = combineReducers({
  videos: videosReducer,
  users: usersReducer,
});

export default rootReducer;
