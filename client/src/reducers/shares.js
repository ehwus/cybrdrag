import {BUY_SHARE, SHARE_ERROR, SELL_SHARE} from "../actions/types";

const initialState = {
  loading: true,
  errors: {},
}

function sharesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case BUY_SHARE:
      return {
        ...state,
        loading: false,
      }
    case SELL_SHARE:
      return {
        ...state,
        loading: false,
      }
    case SHARE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default sharesReducer;