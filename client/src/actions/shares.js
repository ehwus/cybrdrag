import axios from 'axios';
import { BUY_SHARE, SHARE_ERROR, SELL_SHARE } from './types';
import { setAlert } from './alert';

export const buyShares = (performerID, amount) => async (dispatch) => {
  try {
    await axios.post(`/api/shares/${performerID}/${amount}/buy`);
    dispatch({
      type: BUY_SHARE,
    });
    dispatch(setAlert('Share Purchased', 'danger'));
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(err);

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: SHARE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const sellShares = (performerID, amount) => async (dispatch) => {
  try {
    await axios.post(`/api/shares/${performerID}/${amount}/sell`);
    dispatch({
      type: SELL_SHARE,
    });
    dispatch(setAlert('Share Sold', 'danger'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: SHARE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
