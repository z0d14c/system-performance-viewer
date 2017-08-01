import metricsReducer, { toggleMetricReducer } from 'reducers/metricsReducer'

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
})
