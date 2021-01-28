import axios from 'axios';
import {
  GET_EVENTS,
  EVENTS_ERROR
} from './types';
import {setAlert} from "./alert";

// Get all events
export const getEvents = () => async (dispatch) => {
  // dispatch({ type: GET_EVENTS });

  try {
    const res = await axios.get('/api/events');

    dispatch({
      type: GET_EVENTS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: EVENTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};