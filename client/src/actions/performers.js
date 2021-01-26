import axios from "axios";
import {
  GET_PERFORMER,
  GET_PERFORMERS,
  PERFORMERS_ERROR,
  CLEAR_PERFORMER
} from "./types";

// Get all profiles
export const getPerformers = () => async (dispatch) => {
  dispatch({ type: CLEAR_PERFORMER });

  try {
    const res = await axios.get('/api/performers');

    dispatch({
      type: GET_PERFORMERS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PERFORMERS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get profile by ID
export const getPerformersById = (performersID) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/performers/${performersID}`);

    dispatch({
      type: GET_PERFORMER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PERFORMERS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};