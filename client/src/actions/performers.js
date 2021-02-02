import api from '../utils/api';
import {
  GET_PERFORMER,
  GET_PERFORMERS,
  PERFORMERS_ERROR,
  CLEAR_PERFORMER,
  GET_HISTORY,
  HISTORY_ERROR,
} from './types';

// Get all profiles
export const getPerformers = () => async (dispatch) => {
  dispatch({ type: CLEAR_PERFORMER });

  try {
    const res = await api.get('/performers');

    dispatch({
      type: GET_PERFORMERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PERFORMERS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get profile by ID
export const getPerformersById = (performersID) => async (dispatch) => {
  try {
    const res = await api.get(`/performers/${performersID}`);

    dispatch({
      type: GET_PERFORMER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PERFORMERS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get history by ID
export const getHistoryById = (performersID) => async (dispatch) => {
  try {
    const res = await api.get(`/performers/history/${performersID}`);

    dispatch({
      type: GET_HISTORY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: HISTORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
