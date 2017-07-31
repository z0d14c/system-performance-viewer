// @flow

import { call, fork, takeLatest } from 'redux-saga/effects';
import navigationSaga from '../sagas/navigationSagas';

let task;

export function* handleNavigation() {
  if (task) {
    task.cancel(); 
  }
  task = yield fork(navigationSaga);
}

export function* rootSaga() {
  yield [
    takeLatest('LOCATION_CHANGE', handleNavigation),
    call(handleNavigation),
  ]
}

export default rootSaga;