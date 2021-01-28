import PropTypes, {checkPropTypes} from 'prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './../src/reducers';
import { middlewares } from './../src/createStore';

export const findByTestAttr = (component, attr) => {
  return component.find(`[data-test='${attr}']`);
};

export const checkProps = (component, expectedProps) => {
  return checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
};

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};