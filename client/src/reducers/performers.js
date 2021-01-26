import {
  GET_PERFORMER,
  PERFORMERS_ERROR,
  GET_PERFORMERS,
} from '../actions/types';

const initialState = {
  PERFORMER: null,
  PERFORMERS: [],
  loading: true,
  errors: {}
}

function performerReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PERFORMER:
      return {
        ...state,
        PERFORMER: payload,
        loading: false
      };
    case GET_PERFORMERS:
      return {
        ...state,
        PERFORMERS: payload,
        loading: false
      };
    case PERFORMERS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        PERFORMER: null
      };
    default:
      return state;
  }
}

export default performerReducer;
