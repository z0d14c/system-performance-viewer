// @flow

import { call, select } from 'redux-saga/effects';
import { systemViewerMenuSaga } from './systemViewerSagas';

const getPath = (state) => (
  state.location.pathname
);

// map path to saga
const routeMap = {
  '/': systemViewerMenuSaga,
}

export function* navigationSaga() {
  const path = yield select(getPath);
  if (routeMap[path]) {
    yield call(routeMap[path]);
  } else {
    throw new Error('Route not found');
  }
}

export default navigationSaga;
