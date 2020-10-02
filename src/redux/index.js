import { applyMiddleware, createStore, compose } from 'redux';

import reducers from './reducers';

const middlewares = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>
  createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));
