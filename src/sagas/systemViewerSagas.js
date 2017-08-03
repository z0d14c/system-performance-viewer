import { call, put, takeEvery } from 'redux-saga/effects'
import { getData } from './fetchSagas'
import { storeMetrics, TOGGLE_TIMESCALE } from '../reducers/metricsReducer'

export function* fetchAndStoreMetrics() {
    const res = yield call(getData)
    yield put(storeMetrics(res.data))
}
export function* systemViewerMenuSaga() {
    try {
        yield call(fetchAndStoreMetrics)
        // yield takeEvery(TOGGLE_TIMESCALE, fetchAndStoreMetrics)
    } catch (e) {
        // error
        console.log('error ', e);
    }
}
