import {
  GET_PERFORMER,
  PERFORMERS_ERROR,
  GET_PERFORMERS,
} from '../../actions/types';

const initialState = {
  performers: [],
  loading: true,
  errors: {},
};

function performerReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PERFORMER:
    case GET_PERFORMERS:
      return {
        ...state,
        performers: payload,
        loading: false,
      };
    case PERFORMERS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        performer: null,
      };
    default:
      return state;
  }
}

export default performerReducer;
