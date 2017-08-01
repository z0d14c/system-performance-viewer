import { combineReducers } from 'redux'
import locationReducer from './location'
import metricsReducer from '../reducers/metricsReducer';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    metrics: metricsReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
