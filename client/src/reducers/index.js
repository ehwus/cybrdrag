import { combineReducers } from 'redux';
import alert from './alert/alert';
import auth from './auth/auth';
import performers from './performers/performers';
import history from './history/history';
import events from './events/events';

export default combineReducers({
  alert,
  auth,
  performers,
  history,
  events
});
