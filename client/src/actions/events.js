import axios from 'axios';
import {
  GET_EVENTS,
  EVENTS_ERROR
} from './types';

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
    dispatch({
      type: EVENTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};