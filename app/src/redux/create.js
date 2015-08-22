import { createStore, combineReducers, compose } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import * as reducers from '../ducks';

export default function createAppStore(){
  const finalCreateStore = compose(
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
  );

  const reducer = combineReducers(reducers);
  const store = finalCreateStore(reducer);
  return store;
}
