import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import performers from './performers';
import history from './history';
import events from './events';
import shares from './shares';

export default combineReducers({
  alert,
  auth,
  performers,
  history,
  events,
  shares
});
