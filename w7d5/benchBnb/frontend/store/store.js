import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer.js';

const preloadedState = {};

const configureStore = (preloadedState) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware()
  )
);

export default configureStore;
