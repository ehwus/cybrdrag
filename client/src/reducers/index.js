import {combineReducers} from 'redux';
import alert from './alert';
import auth from "./auth";
import performers from "./auth";

export default combineReducers({
  alert,
  auth,
  performers
});