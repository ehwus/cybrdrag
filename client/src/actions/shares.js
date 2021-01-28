import axios from 'axios';
import {
GET_PERFORMER,
} from './types';

export const buyShares = (performerID) => async (
  dispatch
) => {
  console.log('hi')
  try {
    const res = await axios.post(`/api/shares/${performerID}/1/buy`)
    dispatch({
      type: GET_PERFORMER,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
  }
}
