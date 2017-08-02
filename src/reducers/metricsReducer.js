const initialMetricState = {
    toggled: true,
    data: {},
};

export const initialState = {
    HARD_DRIVE_SPACE: {...initialMetricState},
    NETWORK_UTILIZATION: {...initialMetricState},
    MEMORY_UTILIZATION: {...initialMetricState},
    CPU_UTILIZATION: {...initialMetricState},
}

export const TOGGLE_METRIC = 'TOGGLE_METRIC'
export const STORE_METRICS = 'STORE_METRICS'

export const toggleMetric = (metricName) => ({
    type: TOGGLE_METRIC,
    payload: {
        metricName,
    }
})

export const storeMetrics = (metrics) => ({
    type: STORE_METRICS,
    payload: {
        metrics,
    }
})

// store metrics fetched from api
export const storeMetricsReducer = (state, metricsArray) => {
    const newState = {
        ...state,
    }
    metricsArray.forEach(metric => {
        newState[metric.static_name].data = {
            ...metric,
        }
    });
    return newState;
}

export const toggleMetricReducer = (state, metricName) => {
    const metric = state[metricName];
    const newMetricToggle = !metric.toggled;
    const newState = {
        ...state,
        [metricName]: {
            ...metric,
            toggled: newMetricToggle,
        }
    }
    return newState;
}

export default function metricsReducer (state = initialState, action) {
    switch(action.type) {
        case TOGGLE_METRIC:
            return toggleMetricReducer(state, action.payload.metricName)
        case STORE_METRICS:
            return storeMetricsReducer(state, action.payload.metrics);
        default:
            return state;
        break;
    }
    return state
}
