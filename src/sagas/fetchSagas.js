import { call } from 'redux-saga/effects'

export function* callApi(path) {
    const res = yield call(fetch, path)
    const text = yield call([res, res.text])
    let json
    if (!text || text === '') {
        json = {}
    } else {
        json = yield call(JSON.parse, text)
    }
    return json
}

export function* getData() {
    const res = yield call(callApi, '/data')
    return res
}