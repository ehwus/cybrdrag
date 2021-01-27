import { GET_HISTORY, HISTORY_ERROR } from '../actions/types';

const initialState = {
  history: [],
  loading: true,
  errors: {},
};

function historyReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_HISTORY:
      return {
        ...state,
        history: payload,
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
