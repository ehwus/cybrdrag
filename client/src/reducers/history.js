import { GET_HISTORY, HISTORY_ERROR } from '../actions/types';

const initialState = {
  loading: true,
  errors: {},
};

function historyReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_HISTORY:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case HISTORY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        history: null,
      };
    default:
      return state;
  }
}

export default historyReducer;
