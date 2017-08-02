import { call, put } from 'redux-saga/effects'
import { getData } from './fetchSagas'
import { storeMetrics } from '../reducers/metricsReducer'
export function* systemViewerMenuSaga() {
    try {
        const res = yield call(getData)
        yield put(storeMetrics(res.data))
    } catch (e) {
        // error
        console.log('error ', e);
    }
}
