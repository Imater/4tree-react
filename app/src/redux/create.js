import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import promiseMiddleware from 'redux-promise';
import * as reducers from '../ducks';

export default function createAppStore(){
  const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
  const finalCreateStore = compose(
    applyMiddleware(promiseMiddleware),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
  );

  const reducer = combineReducers(reducers);
  const store = finalCreateStore(reducer);
  return store;
}
