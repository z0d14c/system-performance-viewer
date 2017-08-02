import metricsReducer, { 
    toggleMetricReducer,
    storeMetricsReducer,
} from 'reducers/metricsReducer'

describe('(Reducer) metricsReducer', () => {
  it('toggleMetric action should toggle metric value', () => {
    const action = {
        type: 'TOGGLE_METRIC',
        payload: {
            metricName: 'TEST_METRIC',
        }
    }
    const state = {
        TEST_METRIC: {
            toggled: false,
        },
        TEST_METRIC_2: {
            toggled: false,
        }
    }
    const newState = toggleMetricReducer(state, 'TEST_METRIC')
    expect(newState.TEST_METRIC.toggled).to.equal(true)
    expect(newState.TEST_METRIC_2.toggled).to.equal(false)
  })

  it('storeMetricsReducer should store metrics', () => {
    const state = {
        TEST_METRIC: {
            static_name: 'TEST_METRIC',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        }
    }
    // if this was a real app we could store mock api data in a mocks/ folder
    const apiResponse = {
        data: [{
            static_name: "TEST_METRIC",
            data: [2, 2, 2, 4, 4, 4, 8, 8, 8],
        }]
    }
    const newState = storeMetricsReducer(state, apiResponse.data)
    expect(newState.TEST_METRIC.data).to.deep.equal(apiResponse.data[0])
  })
})
