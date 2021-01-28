import {GET_PERFORMER, GET_PERFORMERS, types} from '../../actions/types';
import performerReducer from './performers';

describe('Performers reducer', () => {

  it('Should return default state', () => {
    const newState = performerReducer(undefined, {});
    expect(newState).toEqual({"errors": {}, "loading": true, "performers": []}
    );
  });
})

