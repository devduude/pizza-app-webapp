import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

export default (reducers) => {
  const args = [ combineReducers(reducers) ];
  const middleware = [ thunk ];

  args.push(applyMiddleware(...middleware));

  const store = createStore(...args);

  window.store = store.getState;

  return store;
};
