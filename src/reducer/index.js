import { combineReducers } from 'redux';

import nav from './nav'
import who from './who'
import user from './user'

const AppReducer = combineReducers({
  nav,
  who,
  user
});

export default AppReducer;