import { combineReducers } from 'redux';

import videosReducer from './videos';
import usersReducer from './users';
import errorsReducer from './errors';

const rootReducer = combineReducers({
  videos: videosReducer,
  users: usersReducer,
  errors: errorsReducer,
});

export default rootReducer;
